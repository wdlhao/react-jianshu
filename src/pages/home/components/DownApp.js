import React,{ PureComponent } from "react";
import { connect } from "react-redux";
import { 
    DownAppWrapper,
    DownAppRight
} from "../style";

class DownApp extends PureComponent {
    render(){
        const { downData }   = this.props;
        return (
          <a href={downData.get("href")}>
            <DownAppWrapper>
                <img className="pic" src={downData.get('imgUrl')} alt="" />
                <DownAppRight>
                    <p className="downTitle">下载简书手机App</p>
                    <p className="downDesc">随时随地发现和创作内容</p>
                </DownAppRight>
            </DownAppWrapper>
          </a>
        )
    }
}

const mapState = (state) => {
    return {
        downData:state.getIn(['home','downData'])
    }
}

export default connect(mapState,null)(DownApp);