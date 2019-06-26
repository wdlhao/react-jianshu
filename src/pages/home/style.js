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
  padding:20px 10px 2px 10px;
  display:flex;
  flex-wrap:wrap;
  align-items:flex-start;
  border-bottom:1px solid #dcdcdc;
`

export const TopicWrapperItem = styled.div`
   display: flex;
   height:32px;
   line-height:32px;
   margin-right:6px;
   margin-bottom:18px;
   color:#000;
   border:1px solid #dcdcdc;
   border-radius:5px;
   padding-right:10px;
   font-size:14px;
   .topic-pic{
       width:32px;
       height:32px;
       margin-right:10px;
   }
`
export const ArticeItem = styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  display:flex;
  justify-content:space-between;
  .pic {
    width:150px;
    height:100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`
export const ArticeInfo = styled.div`
  flex:1;
  padding-right:20px;
    .title{
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }
    .desc{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
 
`