import React,{ Component } from "react";
import { connect } from "react-redux";
import { AdvertiseWrapper } from "../style";


class Advertisement extends Component {
    render(){
        const { advertiseData } = this.props;
        return (
            <AdvertiseWrapper>
                <a href={advertiseData.get('href')}>
                   <img className="pic" src={advertiseData.get('imgUrl')} alt=""/>
                </a>
            </AdvertiseWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        advertiseData:state.getIn(['home','advertiseData'])
    }
}

export default connect(mapState,null)(Advertisement);