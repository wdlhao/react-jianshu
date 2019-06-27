import { fromJS } from "immutable"
import * as constants from "./constants";


const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    downData:{},
    advertiseData:{}
})

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.GET_HOME_LIST:
        return state.merge({
            topicList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommendList:fromJS(action.recommendList),
            downData:fromJS(action.downData),
            advertiseData:fromJS(action.advertiseData)
          })
        default:
        return state;
    }
}