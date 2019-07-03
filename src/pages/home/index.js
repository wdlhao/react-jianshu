import React ,{ PureComponent } from "react";
import { connect } from "react-redux";
import { Prompt } from "react-router-dom";
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
    HomeRight,
    ScrollTop
} from "./style";

class Home extends PureComponent {

    handleScrollTop(){
        window.scrollTo(0,0);
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }

    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="bannerImg" src="//upload.jianshu.io/admin_banners/web_images/4674/674a8ac2283f0ff81f3fb4e37fce606cc474f129.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <DownApp />
                    <Advertisement />
                    <Writer />
                </HomeRight>
                {
                   this.props.showScroll?<ScrollTop onClick={this.handleScrollTop}>顶部</ScrollTop>:''
                }
                <Prompt
                    when={false}
                    message="你确定要离开当前页面吗？"
                />
            </HomeWrapper>
        )
    }

    componentDidMount(){
       this.props.getHomeList();
       this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => {
   return {
     showScroll:state.getIn(['home','showScroll'])
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
     getHomeList(){
        dispatch(actionCreators.getHomeList());
     },
     changeScrollTopShow(){
        if(document.documentElement.scrollTop > 300){
            dispatch(actionCreators.changeScrollShow(true));
        }else{
            dispatch(actionCreators.changeScrollShow(false));
        }
     }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);