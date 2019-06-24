import { createStore, compose ,applyMiddleware } from "redux";
import * as reduxObj from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer"; // 
console.log(reduxObj)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;


