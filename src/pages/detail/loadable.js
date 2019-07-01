import React from "react";
import Loadable from 'react-loadable';
// import Loading from './my-loading-component'; // 加载页面前的loading组件

const LoadableComponent = Loadable({
loader: () => import('./'), //为按需加载的页面；
loading(){
    return (
        <div>正在加载...</div>
    )
}
});

export default () => <LoadableComponent/>; // 无状态组件