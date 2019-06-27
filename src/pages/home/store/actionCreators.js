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

