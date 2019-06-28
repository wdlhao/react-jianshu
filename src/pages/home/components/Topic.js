import React,{ PureComponent } from "react";
import { connect } from "react-redux";
import { 
    TopicWrapper,
    TopicWrapperItem
} from "../style";

class Topic extends PureComponent {
    render(){
        const { topicList } = this.props;
        return (
            <TopicWrapper>
            {
                topicList.map((item) => {
                    return (
                        <TopicWrapperItem key={item.get('id')}>
                            <img className="topic-pic" src={item.get('imgUrl')} alt="" />
                            {item.get('title')}
                        </TopicWrapperItem>
                    )
                })
            }
           </TopicWrapper>
        )
    }
}

const mapState = (state) => {
    console.log(state);
    return {
       topicList:state.getIn(['home','topicList'])  // immutable对象获取属性的方法
    }
}

export default connect(mapState,null)(Topic);