import React,{ Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "./store";
import {actionCreators as loginActionCreators } from "../../pages/login/store";

import {
    HeaderWarpper,
    Logo,
    Nav,
    NavItem,
    NavArea,
    SearchItem,
    Search,
    SearchInfo,
    SearchTitle,
    SearchTitleShow,
    SearchHotContent,
    SearchHotItem,
    SearchHotItema,
    FunctionBtn
} from "./style";


/**
 * 1、子组件通过react-redux中的connect与父组件建立联系,使子组件能够获取到父组件传递过来的数据;
 * 2、connect方式：export default connect(mapStateToProps,mapDispatchToProps)(子组件名);
 * 3、connect接收默认的2个参数：mapStateToProps,mapDispatchToProps
 *    > mapStateToProps:函数，接收参数state;
 *    > mapDispatchToProps:函数，接收参数dispatch,用于改变store中的state;重新走action流程;
 * 4、子组件如何获取数据：this.props.focused;注意：通过this.props获取的值为mapStateToProps中接收的值;
 * 
 */


// 当redux中定义的数据发生改变时，接收该数据的组件，也会重新渲染;单向数据绑定，实时变化;
class Header extends Component {
    // 展示组件
    getSearchInfo = () => {
         // 对象解构赋值方式
        const { focused,mouseIn,searchList,pageIndex,pageSize,pageTotal,handleMouseEnter,handleMouseLeave,handleChangePage }  = this.props;
        const newList = searchList.toJS();
        const pageList = [];
        const listLength = newList.length;
        if(listLength){
            let pageLength = pageIndex * pageSize;
            if(listLength - pageLength < pageSize){
                pageLength = listLength;
            }
            for(let i = (pageIndex - 1) * pageSize;i < pageLength;i++){
                pageList.push(
                    <SearchHotItem key = {newList[i]}>
                      <SearchHotItema>{newList[i]}</SearchHotItema>
                    </SearchHotItem>
                );
            }
        }
        if(!focused || mouseIn){
            return ( // return dom element
                <SearchInfo 
                   onMouseEnter = {handleMouseEnter}
                   onMouseLeave = {handleMouseLeave }
                   >
                    <SearchTitle>
                        <SearchTitleShow>热门搜索</SearchTitleShow>
                        <SearchTitleShow className="left"  onClick = {() => handleChangePage(pageIndex,pageTotal,this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont switch">&#xe851;</i>
                            换一批
                        </SearchTitleShow>
                    </SearchTitle>
                    <SearchHotContent>
                        {pageList}
                    </SearchHotContent>
                </SearchInfo>
            )
        }else{
            return null;
        }
     }

    render(){
        const {focused,searchList,handleInputFocus,handleInputBlur,isLogin,logout} = this.props;
        return ( // 容器组件
            <HeaderWarpper>
                <Link to="/">
                   <Logo />
                </Link>
                <Nav>
                <NavArea>
                <Link to="/">
                    <NavItem className="index active">首页</NavItem> 
                </Link>
                <NavItem className="downLoad">下载App</NavItem>
                    <SearchItem>
                        <Search 
                            onFocus = {() => handleInputFocus(searchList)}
                            onBlur = {handleInputBlur}
                            >
                        </Search>
                        <i className={`iconfont searchIcon ${focused ? 'focused' : ''}`}>&#xe926;</i>
                        {this.getSearchInfo()}
                    </SearchItem>
                </NavArea>
                <NavArea>
                    <NavItem>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    {
                        isLogin?<NavItem onClick={logout}>退出</NavItem>:<Link to="/login"><NavItem>登录</NavItem></Link>
                    }
                    <FunctionBtn className='RegisterBtn'>注册</FunctionBtn>
                    <Link to="/write">
                        <FunctionBtn className='WriteArticleBtn'>
                            <i className="iconfont">&#xe603;</i>
                            写文章
                        </FunctionBtn>
                    </Link>
                </NavArea>
                </Nav>
            </HeaderWarpper>
        )
    }
}

// 容器组件：负责页面的业务逻辑
const mapStateToProps = (state) => {
    return {
        focused:state.get('header').get('focused'),
        searchList:state.get('header').get('searchList'),
        mouseIn:state.get('header').get('mouseIn'),
        pageIndex:state.get('header').get('pageIndex'),
        pageSize:state.get('header').get('pageSize'),
        pageTotal:state.get('header').get('pageTotal'),
        isLogin:state.get('login').get('isLogin')
    }
 }


 /**
  * 1、mapDispatchToProps接收默认的传参dispatch,用于触发action;
  * 2、函数的返回值为一个对象;对象里面是各个函数;函数之间用','隔开;
  * 3、如果函数里面要改变state,需要重新走action流程;action-->store-->reducer-->store-->components;
  */
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(searchList){
            // 注意：actionCreators引入的数据为函数
            // 去获取ajax数据:中间件react-thunk,放在action中去处理，使得可以在action中写函数；
            // 
            (searchList.size === 0) && dispatch(actionCreators.getSearchList());
            // 聚焦
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
           dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        // 传参;
        handleChangePage(pageIndex,pageTotal,spin){
            // 正则匹配已经旋转的度数;
            let originAngle = spin.style.transform.replace(/[^0-9]/gi,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle+360) + 'deg)';

            if(pageIndex  < pageTotal){
                dispatch(actionCreators.changePage(pageIndex+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },
        logout(){
            dispatch(loginActionCreators.logout());
        }
        
    }
 }

export default connect(mapStateToProps,mapDispatchToProps)(Header);


