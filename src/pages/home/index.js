import React ,{ Component } from "react";
import { connect } from "react-redux";
import * as actionCreators  from "./store/actionCreators";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import DownApp from "./components/DownApp";
import Advertisement from "./components/Advertisement";
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
                    <DownApp></DownApp>
                    <Advertisement></Advertisement>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount(){
       this.props.getHomeList();
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
     getHomeList(){
        dispatch(actionCreators.getHomeList());
     }
   }
}
export default connect(null,mapDispatchToProps)(Home);