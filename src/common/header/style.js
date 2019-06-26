import styled from "styled-components";
import logoPic from "../../statics/images/logo.png"

export const HeaderWarpper  = styled.div `
  positon:relative;
  height:56px;
  line-height:56px;
  border-bottom:1px solid #f0f0f0;
  display:flex;
  align-item:center;
`;

export const Logo  = styled.a.attrs({
    href:'/'
}) `
  height:56px;
  width:100px;
  display:block;
  background:url(${logoPic});
  background-size:contain;
`;

export const Nav  = styled.div `
  display:flex;
  flex:1;
  height:100%;
  justify-content:space-between;
  align-items:center;
  margin-left:100px;
`;

export const NavArea  = styled.div `
    display:flex;
    align-items:center;
`;

export const NavItem = styled.div `
   margin-right:30px;
   color:#333;
   font-size:17px;
   &.active {
       color: #ea6f5a;
       background: none;
   }
`;

export const SearchItem = styled.div`
   position:relative;
   .searchIcon{
        position: absolute;
        right: 10px;
        border-radius: 52px;
        background: #ea6f5a;
        width: 30px;
        height: 30px;
        display: block;
        text-align: center;
        line-height: 30px;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        font-size: 20px
   }
   .focused{
       display:none;
   }
`;  

export const Search = styled.input.attrs({
    placeholder:'搜索'
}) `
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    outline:none;
    &::placeholder {
        color:#999;
    }
`;  

export const SearchInfo  = styled.div`
   width:250px;
   padding:20px;
   position:absolute;
   left:0;
   top:56px;
   box-shadow: 0 0 8px rgba(0,0,0,.2);
   overflow:hidden;
   background:#fff;
`
export const SearchTitle  = styled.div`
    width:100%;
    height: 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;
`

export const SearchTitleShow  = styled.span`
    font-size: 14px;
    color: #969696;
    &.left{
        cursor:pointer;
    }
    .switch{
        float:left;
        margin-right:5px;
        font-size:12px;
        display:block;
        transition:all .2s ease-in;
        transform-origin:center center;
    }

`

export const SearchHotContent  = styled.ul`
    width:100%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
`
export const SearchHotItem  = styled.li`
    margin-right: 10px;
    display: inline-block;
    line-height: 28px;
`
export const SearchHotItema  = styled.a.attrs({
    'href':'http://wwww.baidu.com',
    'target':'_blank'
})`
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor:pointer;
    text-decoration: solid;
    &:hover{
      color:#333
    }
`

export const FunctionBtn = styled.div`
    display: inline-block;
    text-align: center;
    height: 38px;
    line-height:38px;
    border-radius: 20px;
    font-weight: 400;
    font-size: 15px;
    margin-right:20px;
    &.RegisterBtn {
        width:80px;
        border: 1px solid rgba(236,97,73,.7);
        color: #ea6f5a;
        background-color: transparent;
    }
    &.WriteArticleBtn {
        width: 100px;
        color: #fff;
        background-color: #ea6f5a;
    }
`;  
