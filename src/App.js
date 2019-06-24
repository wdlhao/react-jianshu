import React, { Component,Fragment } from 'react';
import { Provider } from "react-redux";
import Header from "./common/header";
import store from "./store";
//导入样式文件
import {GlobalStyle} from "./statics/css/style";
import {GlobalIconStyle} from "./statics/iconfont/iconfont";

/**
 * 1、被Provider包裹的所有的组件，都可以使用store中的数据;
 * 
 */
class App extends Component {
  render() {
    return (
      <Fragment>
         <GlobalStyle />
         <GlobalIconStyle />
         <Provider store={store}>
           <Header></Header>
         </Provider>
      </Fragment>
    );
  }
}

export default App;
