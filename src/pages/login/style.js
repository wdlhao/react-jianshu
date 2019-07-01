import styled from "styled-components";
import logoPic from "../../statics/images/logo.png"


export const LoginWrapper = styled.div`
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  width:100%;
  height:100%;
  background:#f1f1f1;
  z-index:2;
`

export const LoginBox = styled.div`
    position:absolute;
    top:50%;
    right:50%;
    left:50%;
    bottom:50%;
    width: 400px;
    height:200px;
    transform:translate(-50%,-50%);
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    display: inline-block;
    text-align:center;
`

export const Input = styled.input`
   width:300px;
   height:30px;
   line-height:30px;
   border:1px solid #dcdcdc;
   border-radius:4px;
   margin-bottom:20px;
   padding:0 10px;
`

export const Button = styled.div`
    width:300px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    display: block;
    background: #3194d0;
    margin: 0 auto;
    padding: 10px;
`


export const Logo  = styled.div`
  height: 80px;
  width: 150px;
  display:block;
  background:url(${logoPic});
  background-size:contain;
  background-repeat:no-repeat;
  position:fixed;
  top:60px;
  left:40px;
`;