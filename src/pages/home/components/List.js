import React,{ PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators  from "../store/actionCreators"; // export,函数和变量的导入方法不一样
import { ArticeItem ,ArticleTop, ArticeInfo,ArticleBottom,LoadMoreArticle } from "../style";

class List extends PureComponent {
    render(){
        const { articleList,loadMoreArticle,page }  = this.props;
        return (
            <div>
             {
                articleList.map((item,index) => {
                    return (
                        <Link to="/detail" key={index}>
                            <ArticeItem>
                                <ArticleTop>
                                    <ArticeInfo>
                                        <p className="title">{item.get('title')}</p>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ArticeInfo>
                                    <img className="pic" src={item.get('imgUrl')} alt="" />
                                </ArticleTop>
                                <ArticleBottom>
                                    <span className="jsd base">
                                    <i className="iconfont">&#xe640;</i>
                                    {item.get('shangjin')}
                                    </span>
                                    <span className="base"> {item.get('author')}</span>
                                    <span className="base"><i className="iconfont">&#xe653;</i>{item.get('pingNum')}</span>
                                    <span className="base"><i className="iconfont">&#xe604;</i>{item.get('shoucangNum')}</span>
                                </ArticleBottom>
                            </ArticeItem>
                        </Link>
                    )
                })
             }
             <LoadMoreArticle onClick = {() => loadMoreArticle(page)}>
                 加载更多
             </LoadMoreArticle>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        articleList:state.getIn(['home','articleList']),
        page:state.getIn(['home','articlePage'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadMoreArticle(page){
            dispatch(actionCreators.loadMoreArticle(page));
        }
    }
}
export default connect(mapState,mapDispatch)(List);