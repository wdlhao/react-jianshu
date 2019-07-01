import React ,{ PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { WriteWrapper } from "./style"



class Write extends PureComponent {
    render(){
        const { isLogin } = this.props;
        if(isLogin){
            return (
                <WriteWrapper>写文章页面</WriteWrapper>
            )
        }else{
            return (
                <Redirect to="/login" />
            )
        }
       
    }

}


const mapState = (state) => ({
  isLogin:state.getIn(['login','isLogin'])   
})



export default connect(mapState,null)(Write);