import React,{ Component } from "react";
import { connect } from "react-redux";
import { RecommendWrapper } from "../style";

class Recommend extends Component {
    render(){
        const { recommendList } = this.props;
        return (
            <div>
                <RecommendWrapper>
                {
                    recommendList.map((item) => {
                        return (
                           <a target="_blank" href={item.get('imgHref')}  key={item.get('id')} rel="noopener noreferrer">
                              <img className="pic" src={item.get('imgUrl')} alt="" />
                           </a>
                        )
                    })
                }
                </RecommendWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommendList:state.getIn(['home','recommendList'])
    }
}
export default connect(mapStateToProps,null)(Recommend);