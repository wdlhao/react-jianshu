/**
 * 1、定义默认state数据对象;
 * 2、定义默认的返回函数对象(纯函数);接收默认的参数对象：state和action
 *  immutable.js
 *  作用：用于reducer.js中，保证state不被修改;
 *  对象变更原理：
 *   immutable对象的set方法，会结合之前immutable对象的值和新设置的值，返回一个全新的对象；所有不会改变原来state对象的值。
 *  使用方法：
 *  1、npm install immutable
 *  2、import { fromJS } from "immutable";
 *     fromJS():将一个js数据转换为Immutable类型的数据
 *  3、将state数据(js对象)变为immutable对象：fromJS({focused:true})
 *  4、set数据：state.set('focused',false);
 *  5、get数据(header/index.js): state.header.get('focused')
 *  */
   
import * as constants from "./constants";
import { fromJS } from 'immutable';
// import store from "../../../store";
// import reducer from "../../../store/reducer";

const defaultState = fromJS({
    focused:true,  // 是否获取焦点
    mouseIn:false, // 鼠标是否进入热门搜索区域
    searchList:[],  // immutable对象;
    pageIndex:1,
    pageSize:10,
    pageTotal:1
})


// state：为immutable对象；
export default (state = defaultState,action) => {
    switch(action.type){
        case constants.SEARCH_FOCUSED:
            return state.set('focused',false)
        case constants.SEARCH_BLUR:
            return state.set('focused',true)
        case constants.GET_SEARCH_LIST:
            return state.merge({
                'searchList':action.data,
                'pageTotal':action.pageTotal
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true)
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false)
        case constants.CHANGE_PAGE:
            return state.set('pageIndex',action.page)
        default:
            return state
    }
}


