//1.发起异步调用
 // (1). UI 组件上添加一个额外的按钮和一个回调 onIncrementAsync。
 const Counter = ({value, onIncrement, onDecrement, onIncrementAsync }) => 
    <div>
        <button onClick={onIncrementAsync}>
           Increment after 1 second
        </button>
        <button onClick={onIncrement}>
           Increment
        </button>
        <button onClick={onDecrement}>
           Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
    </div>
    // (2).需要将组件的 onIncrementAsync 与 Store action 连接起来。

    //修改 main.js 模块：
    function render() {
        ReactDOM.render(
          <Counter
            value={store.getState()}
            onIncrement={() => action('INCREMENT')}
            onDecrement={() => action('DECREMENT')}
            onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
          document.getElementById('root')
        )
    }
    // 注意，与 redux-thunk 不同，上面组件 dispatch 的是一个 plain Object 的 action。
    // sagas.js 模块：
    import { delay } from "redux-saga";
    import { put,takeEvery } from 'redux-saga/effects';
    
    // our worker saga:将执行异步的 increment任务
    export function * incremenAsync(){
        yield delay(1000)
        yield put({
            type:'INCREMENT'
        })
    }

    // our watcher saga:在每个 INCERMENT_ASYNC action spaawn 一个新的 incrementAsync 任务
    export function* watchIncrementAsync(){
      yield takeEvery('INCREMENT_ASYNC',incrementAsync)
    }

    //将添加一个 rootSaga，负责启动其他的 Sagas。在同样的 sagas.js 文件中，重构文件如下：
    import { delay } from "redux-saga";
    import { put ,takeEvery,all } from "redux-saga/effects";

    function* incrementAsync(){
      yield delay(1000)
      yield put({type:'INCREMENT'})
    }
    function * watchIncrementAsync(){
      yield takeEvery('INCREMENT_ASYNC',incrementAsync)
    }

    export default function* rootSaga(){
      yield all([
         helloSaga(),
         watchIncrementAsync()
      ])
    }
    //我们只有在 main.js 的 root Saga 中调用 sagaMiddleware.run。
    import rootSaga from "./sagas";

    const sagaMiddleware = createSagaMiddleware()
    const store = ...
    sagaMiddleware.run(rootSaga)

    // 假如现在有一个场景：用户在登录的时候需要验证用户的 username 和 password 是否符合要求。
    // 使用 redux-thunk 实现
    // 获取用户数据的逻辑（user.js):
    
    // user.js
    import request from "axios";
    
    export const loadUserData = (uid) => saync (dispatch) => {
      try {
        dispatch({type:USERDATA_REQUEST}); // init 用户数据
        let { data } = await request.get(`/user/${uid}`); // 根据uid获取用户数据
        dispatch({type:USERDATA_SUCCESS,data}); // 将请求成功之后的数据给用户
      } catch(error){
        dispatch({type:USERDATA_ERROR,error}); // 请求失败处理
      }
    }
    // 验证登录的逻辑(login.js):
    import request from "axios";
    import { loadUserData } from "./user";
    export const login = (user,pass) => async (dispatch) => {
      try{
        dispatch({type:LOGIN_REQUEST});  // init 登录请求数据
        let { data } = await request.post('/login',{user,pass}); // 登录接口返回数据
        await dispatch(loadUserData(data.uid)); // 根据uid加载用户信息
        dispatch({type:LOGIN_SUCCESS,data}); // 用户登录成功了
      }catch(err){
        dispatch({type:LOGIN_ERROR,error}); // 用户登录失败了
      }
    }

    // 使用 redux-saga 实现
    // 异步逻辑可以全部写进 saga.js 中：
    export function* loginSaga(){
      while(true){
        const { user,pass }  = yield take(LOGIN_REQUEST); // 等待store上指定的action LOGIN_REQUEST
        try{
          let { data } =  yield call(loginRequest,{user,pass}) // 阻塞，请求后台数据
          yield fork(loadUserData,data.uid) // 非阻塞执行 loadUserData
          yield put({type:LOING_SUCCESS,data});  // 发起一个action，类似于dispatch
        }catch(error){
           yield put({type:LOING_ERROR,error});
        }
      }
    }

    export function* loadUserData(uid){
      try{
        yield put({type:USERDATA_REQUEST });
        let { data } = yield call(userRequest,`users/${uid}`);
        yield put({type:USERDATA_SUCCESS,data});
      }catch(err){
        yield put({ type: USERDATA_ERROR, error });
      }
    }
    
    //难点解读
    /**1.take 和 takeEvery 都是监听某个 action, 但是两者的作用却不一致.
      takeEvery 是每次 action 触发的时候都响应;
      take 则是执行流执行到 take 语句时才响应。但是 take 可以在 generator 函数中决定何时响应一个 action 以及 响应后的后续操作。
      例如在监听所有类型的 action 触发时进行 logger 操作，使用 takeEvery 实现如下：
    */
      import { takeEvery } from "redux-saga/effects";
      function* watchAndLog(getState){
        yield* takeEvery('*',function* logger(action){
          // do some logger operation // 在回调函数体内
        })
      }
    //使用 take 实现如下：
    import { take } from "redux-saga/effects";
    function* watchAndLog(getState){
       while(true){
         const action = yield take('*')
        //do some logger operation //与 take 并行 
       }
    }
    // 阻塞和非阻塞
    /**
     * 1.call 是阻塞的操作:它在 Generator 调用结束之前不能执行或处理任何其他事情
     * 2.fork 却是非阻塞操作，当 fork 调动任务时，该任务会在后台执行，此时的执行流可以继续往后面执行而不用等待结果返回。
     * 
     * 例如如下的登录场景:
     */
    function* loginFlow(){
      while(true){
        const { user,pass } =  yield take('LOGIN_REQUEST');
        const token = yield call(authorize,user,pass);  // 阻塞
        if(token){
          yield call(Api.storeItem({token})); // 阻塞
          yield take('LOGOUT');  // 响应触发action,
          yield call(Api.clearItem('token'));
        } 
      }
    }

    /**
     * 同时执行多个任务
     * 如若遇到某个场景需要同一时间执行多个任务，比如 请求 users 数据 和 products 数据, 应该使用如下的方式：
     * 
     * 当 yield 后面是一个数组时，那么数组里面的操作将按照 Promise.all 的执行规则来执行，genertor 会阻塞知道所有的 effects 被执行完成
     */
    import { call } from "redux-saga/effects";
    // 同步执行
    const [users,products] = yield [
      call(fetch,'/users'),
      call(fetch,'/products')
    ]

    // 而不是，顺序执行
    const users = yield call(fetch,'/users');
    const products = yield call(fetch,'/products');
      