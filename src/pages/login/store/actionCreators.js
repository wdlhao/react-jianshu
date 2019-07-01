import axios from "axios"
import * as constants from "./constants";

const changeLoginStatus = (isLogin) => ({
    type:constants.CHANGE_LOGIN_STATUS,
    isLogin
})

export const login = (username,password) => {
    return (dispatch) => {
        axios.get('/api/login.json?username='+username+'password='+password).then((res)=> {
            const result = res.data.data;
            if(result.isLogin){
                dispatch(changeLoginStatus(result.isLogin));
            }else{
                alert('登录失败~');
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(changeLoginStatus(false));
    }
}