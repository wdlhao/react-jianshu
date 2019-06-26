

/**
 * combineReducers:
 * 背景、大型项目需要拆分reduers.js的功能;(小手册进行分类管理);
 * 使用方法：
 *   1、在相应的组件(header组件)下新建store/reducer.js文件，分担独自组件的状态管理；
 *   2、从redux-immutable中导入combineReducers，从header组件中导入headerReducer；
 *   3、载入combineReducers方法并导出;
 *   4、修改组件中mapStateToProps中state的获取源：focused:state.header.focused;
 * 
 * combineReducers来自redux-immutable
 * 背景：保证整个项目生成的数据内容为immutable对象内容;
 *  使用方法：
 *   1、导入：import { combineReducers } from "redux-immutable";
 *   2、更改组件header中，mapStateToProps的参数state获取数据的方式为immutable对象方式；
 *      state.get('header').get('focused')/ state.getIn['header','focused']
 */


import { combineReducers } from "redux-immutable";
import {reducer as headerReducer} from "../common/header/store"; //reduers.js
import {reducer as homeReducer} from "../pages/home/store";

const reducer = combineReducers({
    header : headerReducer,
    home:homeReducer
})


export default reducer;