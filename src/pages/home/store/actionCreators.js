import * as constants from "./constants";
import axios from "axios"; 


// obj
export const changeHomeList = (result) => ({
    type:constants.GET_HOME_LIST,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList,
    downData:result.downData,
    advertiseData:result.advertiseData
})

export const loadMoreArticleData = (result,nextPage) => ({
    type:constants.LOAD_MORE_ARTICLE_DATA,
    articleList:result,
    nextPage
})

export const changeScrollShow = (show) => ({
    type:constants.CHANGE_SCROLL_SHOW,
    show
})

export const getHomeList = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeList(result));
        },(error) => {
            console.log(error);
        })
    }
}

// const jsonToString  = (data) => {
//     console.log(data);
//     if(!data || (JSON.stringify(data) === "{}" )){ return ''}
//     let str = '';
//     for(let key in data){
//         str += '&'+key+'='+data[key]
//     }
//     return str;
// }

// 加载更多文章列表数据
export const loadMoreArticle = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res) => {
            const result = res.data.data;
            dispatch(loadMoreArticleData(result,page+1));
        })
    }
}
