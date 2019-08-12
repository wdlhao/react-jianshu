import React ,{ PureComponent } from "react";
import { connect } from "react-redux";
import { Link,Redirect } from "react-router-dom";
import { actionCreators } from "./store";
import {
   LoginWrapper,
   LoginBox,
   Input,
   Button,
   Logo
} from "./style";

class Login extends PureComponent {
    render(){
        const { isLogin } = this.props;
        if(!isLogin){
            return (
                <LoginWrapper>
                  <Link to="/">
                    <Logo />
                  </Link>
                  <LoginBox>
                    <Input placeholder="用户名" ref={el => {this.username = el}} />
                    <Input placeholder="密码" type="password" ref={el=>this.password = el} />
                    <Button onClick={ () => this.props.login(this.username,this.password)}>登录</Button>
                  </LoginBox>
                </LoginWrapper>
             )
        }else{
            return (
                <Redirect to="/" />
            )
        }
       
    }

}


const mapState = (state) => ({
  isLogin:state.getIn(['login','isLogin'])   
})

const mapDispatch = (dispatch) => ({
    login(usernameElem,passwordElem){
      // 页面组件中，触发creator action;
        dispatch(actionCreators.login(usernameElem.value,passwordElem.value));
    }
})


export default connect(mapState,mapDispatch)(Login);