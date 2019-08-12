import { createStore, compose ,applyMiddleware } from "redux";
import * as reduxObj from "redux";
import thunk from "redux-thunk";  // 用于在action中使用异步操作;ajax请求;
import reducer from "./reducer"; // 
console.log(reduxObj)

/**
  redux-thunk : https://github.com/reduxjs/redux-thunk
  const store = createStore(reducer,applyMiddleware(thunk));
  
  redux-devtools-extension: https://github.com/zalmoxisus/redux-devtools-extension
  redux-devtools工具，主要用于监听store数据;
  而react-developer-tools,主要用于监听组件属性props;
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;


