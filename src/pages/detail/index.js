import React ,{ PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store"
import { withRouter } from "react-router-dom";
import {
    DetailWrapper,
    DetailLeft,
    DetailRight,
    DetailTitle,
    Introduce,
    IntroduceRight,
    FollowBtn
} from "./style";

class Detail extends PureComponent {

    render(){
        const { title,userPic,username,introducePic,content} =  this.props;
        console.log(this.props);
        return (
             <DetailWrapper>
                <DetailLeft>
                    <DetailTitle>{title}</DetailTitle>
                    <Introduce>
                       <img src={userPic} alt="96" />
                       <IntroduceRight>
                          <p className="top">
                            {username}
                            <img className="edit" src="//cdn2.jianshu.io/assets/badges/excellent-34cdda4de26ee9910f190239ffecf886c24045136468fa26f041b0156a143cd9.png" alt="" />
                            <FollowBtn>+ 关注</FollowBtn>
                          </p>
                          <p className="bottom">2019.01.21 08:43 字数 974 阅读 1154评论 6喜欢 59</p>
                       </IntroduceRight>
                    </Introduce>
                    <img className="pic" src={introducePic} alt="" />
                    <div dangerouslySetInnerHTML={{__html:content}}></div>
                </DetailLeft>
                <DetailRight>
                  <a className="sideBanner" target="_blank" href="/apps/redirect?utm_source=side-banner-click"><span className="close">×</span></a>
                  <a className="youdaoBanner" target="_blank" href="/apps/redirect?utm_source=side-banner-click"></a>
                </DetailRight>
             </DetailWrapper>
        )
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getDetail(id);
    }
}

const mapState = (state) => ({
    title:state.getIn(['detail','title']),
    userPic:state.getIn(['detail','userPic']),
    username:state.getIn(['detail','username']),
    introducePic:state.getIn(['detail','introducePic']),
    content:state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
})

export default connect(mapState,mapDispatch)(withRouter(Detail));