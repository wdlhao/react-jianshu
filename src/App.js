import React, { Component,Fragment } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router,Route } from "react-router-dom";
import * as routeDom from "react-router-dom";
import Header from "./common/header"; // React组件标签第一个字母用大写来表示。
import Home from "./pages/home";
import Detail from "./pages/detail/loadable.js";
import Login from "./pages/login";
import Write from "./pages/write";
import DownLoad from "./pages/downLoad";
import store from "./store";
//导入样式文件
import {GlobalStyle} from "./statics/css/style";
import {GlobalIconStyle} from "./statics/iconfont/iconfont";
console.log(routeDom);
console.log('2222');

/**
 * 1、被Provider包裹的所有的组件，都可以使用store中的数据;
 * 
 */
class App extends Component {
  render() {
    return (
      <Fragment>
         {/* 全局样式文件*/}
         <GlobalStyle />
          {/* 全局icon样式文件*/}
         <GlobalIconStyle />
         <Provider store={store}>
           <Router>
                <Header></Header>
                <Route path="/" exact component={Home}></Route>
                <Route path="/detail/:id" exact component={Detail}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/write"  component={Write}></Route>
                <Route path="/downLoad"  component={DownLoad}></Route>
                <Route path="/Aa"  render={() => (<div style={{marginTop:60+'px'}}>这是Aa页面</div>)}></Route>
           </Router>
         </Provider>
      </Fragment>
    );
  }
}

export default App;
