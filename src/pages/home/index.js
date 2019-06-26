import React ,{ Component } from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from "./style";

class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="bannerImg" src="//upload.jianshu.io/admin_banners/web_images/4674/674a8ac2283f0ff81f3fb4e37fce606cc474f129.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;