import { createStore, compose ,applyMiddleware } from "redux";
import * as reduxObj from "redux";
import thunk from "redux-thunk";  // 用于在action中使用异步操作;ajax请求;
import reducer from "./reducer"; // 
console.log(reduxObj)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;


