import { fromJS } from "immutable"
import * as constants from "./constants";


const defaultState = fromJS({
    topicList:[],
    articleList:[],
    articlePage:1,
    recommendList:[],
    downData:{},
    advertiseData:{},
    showScroll:false
})

const getHomeList = (state,action) => {
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
        downData:fromJS(action.downData),
        advertiseData:fromJS(action.advertiseData)
    });
}

const loadMoreArticleData = (state,action) => {
    return state.merge({
        articleList:state.get('articleList').concat(fromJS(action.articleList)),
        articlePage:action.nextPage
    });
}

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.GET_HOME_LIST:
           return getHomeList(state,action);
        case constants.LOAD_MORE_ARTICLE_DATA:
           return loadMoreArticleData(state,action);
        case constants.CHANGE_SCROLL_SHOW:
           return state.set('showScroll',action.show)
        default:
        return state;
    }
}