import { fromJS } from "immutable"
import * as constants from "./constants";


const defaultState = fromJS({
    title:'',
    userPic:'',
    username:'',
    introducePic:'',
    content:''
})



export default (state = defaultState,action) => {
    switch(action.type){
         case constants.CHANGE_DETAIL:
            return state.merge({
                title:action.result.title,
                userPic:action.result.userPic,
                username:action.result.username,
                introducePic:action.result.introducePic,
                content:action.result.content
            })
        default:
        return state;
    }
}