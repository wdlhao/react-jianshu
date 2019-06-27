import React,{ Component } from "react";
import { connect } from "react-redux";
import { ArticeItem ,ArticleTop, ArticeInfo,ArticleBottom } from "../style";

class List extends Component {
    render(){
        const { articleList }  = this.props;
        return (
            <div>
             {
                articleList.map((item) => {
                    return (
                        <ArticeItem key={item.get('id')}>
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
                    )
                })
             }
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        articleList:state.getIn(['home','articleList'])
    }
}
export default connect(mapState,null)(List);