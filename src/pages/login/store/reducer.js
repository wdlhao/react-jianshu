   
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