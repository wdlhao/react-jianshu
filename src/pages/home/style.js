import styled from "styled-components";

export const HomeWrapper = styled.div`
   overflow:hidden;
   width:960px;
   margin:0 auto;
   border:1px solid;
`

export const HomeLeft = styled.div`
   float:left;
   width:640px;
   padding-top: 30px;
   padding-right: 0;
   border:1px solid green;
   .bannerImg{
       width:100%;
       height:270px;
   }
`

export const HomeRight = styled.div`
   float:right;
   width:280px;
   padding: 30px 0 0;  
   border:1px solid green;
`

export const TopicWrapper = styled.div`
  width:100%;
  padding:20px 10px;
  display:flex;
  flex-wrap:wrap;
  align-items:flex-start;
`

export const TopicWrapperItem = styled.div`
   display: flex;
   height:32px;
   line-height:32px;
   margin-right:10px;
   margin-bottom:18px;
   color:#000;
   border:1px solid #dcdcdc;
   border-radius:8px;
   padding-right:10px;
   font-size:14px;
   .topic-pic{
       width:32px;
       height:32px;
       margin-right:10px;
   }

`