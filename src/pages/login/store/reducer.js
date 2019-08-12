/**
 actionCreators.js中，通过dispatch触发action(type),reducer.js中通过action.type监听到，进行数据改变;
5.2、Redux的工作流程;
  > React Components:指页面上的每一个组件;  --->        触发store;
  > Store:数据存储空间                     --->        (包含Action Creator,constants,reducer,index(三者集中地))
  > Action Creators:执行组件发出的指令;     --->        dispatch触发指令；
  > Reducers:记录本，查找相关的数据;        --->        通过action.type监听指令；

 */   
import * as constants from "./constants";
import { fromJS } from 'immutable';

const defaultState = fromJS({
   isLogin:false
})

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.CHANGE_LOGIN_STATUS:
           return state.set('isLogin',action.isLogin)
        case constants.LOGOUT:
           return state.set('isLogin',action.isLogin)
        default:
          return state;
    }
}