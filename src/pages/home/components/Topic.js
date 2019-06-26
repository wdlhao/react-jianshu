import React,{ Component } from "react";
import { 
    TopicWrapper,
    TopicWrapperItem
} from "../style";

class Topic extends Component {
    render(){
        return (
            <TopicWrapper>
               <TopicWrapperItem>
                  <img className="topic-pic" src="//upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                   社会热点
               </TopicWrapperItem>
           </TopicWrapper>
        )
    }
}

export default Topic;