import React,{ PureComponent } from "react";
import {
    WriterWrapper,
    WriterTop,
    WriterMiddle,
    WriterMiddleItem,
    MiddleItemWrapper,
    WriterBottom
} from "../style";

class Writer extends PureComponent {
    render(){
        return (
            <div>
                <WriterWrapper>
                    <WriterTop>
                        <span>推荐作者</span>
                        <span><i className="iconfont">&#xe851;</i>换一批</span>
                    </WriterTop>
                    <WriterMiddle>
                        <a href="https://www.jianshu.com/u/e7dd0b3c7b70?utm_source=desktop&utm_medium=index-users">
                            <WriterMiddleItem>
                                <img className="userPic" src="//upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                                <MiddleItemWrapper>
                                    <p className="username">老沈</p>
                                    <p className="desc">写了188字.1000人喜欢</p>
                                </MiddleItemWrapper>
                                <p className="guanzhu">+ 关注</p>
                            </WriterMiddleItem>
                        </a>
                    </WriterMiddle>
                    <WriterBottom>
                        <a href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users">
                           <span>查看全部 ></span>
                        </a>
                    </WriterBottom>
                </WriterWrapper>
            </div>
        )
    }
}

export default Writer;