/**
 * actionCreator.js
 * 作用：定义函数用来返回type,将所有组件中定义的action逻辑交给actionCreators来进行集中管理；
 * 使用方法：
 * 1、在相应的组件store下新建actionCreator.js文件，定义函数用来返回type;
 * 2、type进行统一的常量管理；新建常量管理器constants.js,定义常量并返回;
 * 3、在reducer.js中，用新建的常量替换以前的actoin,type;
 * 4、在store/index.js中,新增导出对象{ actionCreators,constants}
 * 5、在header/index.js中,引入actionCreators，用于触发dispatch；
 */
import * as constants from "./constants";
import axios from "axios"; 
import { fromJS } from "immutable";

const changeSearchList = (data) => ({
    type:constants.GET_SEARCH_LIST,
    data:fromJS(data),   // 将数据类型转化为immutable类型;
    pageTotal:Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
   type:constants.SEARCH_FOCUSED
})


export const searchBlur = () => ({
    type:constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type:constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type:constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type:constants.CHANGE_PAGE,
    page
})
/**
 * 1、中间件redux-thunk,使得返回值可以为函数，没有使用redux-thunk以前的返回值为一般对象；
 *   
 */
export const getSearchList = () => {
    return (dispatch) => {
        // /api/:首先回去访问后端服务器接口数据;如果找不到后端接口,就会自动访问到项目下/public/下api下对应的文件,即可以访问本地数据;
        axios.get('/api/getSearchList.json').then((res) => {
            const data = res.data;
            // 要改变state中的数据，又要开始action流程；
            const action = changeSearchList(data.data);  // action都是由actionCreator创建的;
            dispatch(action);
        }).catch((err) => { 
            console.log(err);
        })
    }
}