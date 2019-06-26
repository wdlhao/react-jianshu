import React,{ Component } from "react";
import { connect } from "react-redux";
import { ArticeItem , ArticeInfo } from "../style";

class List extends Component {
    render(){
        const { articleList }  = this.props;
        return (
            <div>
             {
                articleList.map((item) => {
                    return (
                        <ArticeItem key={item.get('id')}>
                            <ArticeInfo>
                                <p className="title">{item.get('title')}</p>
                                <p className="desc">{item.get('desc')}</p>
                            </ArticeInfo>
                            <img className="pic" src={item.get('imgUrl')} alt="" />
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