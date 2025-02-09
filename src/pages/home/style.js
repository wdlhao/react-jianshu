import styled from "styled-components";

export const HomeWrapper = styled.div`
   overflow:hidden;
   margin:0 auto;
   width:960px;
   margin-top:60px;
`

export const HomeLeft = styled.div`
   float:left;
   width:640px;
   padding-top: 30px;
   padding-right: 0;
   .bannerImg{
       width:100%;
       height:270px;
   }
`

export const HomeRight = styled.div`
   float:right;
   width:280px;
   padding: 30px 0 0;  
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
  flex-direction:column;
  .pic {
    width:150px;
    height:100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`

export const ArticleTop = styled.div`
    width:100%;
    margin-bottom:15px;
    display:flex;
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
export const ArticleBottom = styled.div`
   overflow:hidden;
   width:100%;
   font-size: 12px;
   font-weight: 400;
   color:#787878;
   .jsd{
     color:#ea6f5a;
   }
   .iconfont{
     margin-right:5px;
   }
   .base{
     margin-right:10px;
   }
`

export const RecommendWrapper = styled.div`
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
  .pic{
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`

export const DownAppWrapper = styled.div`
  display:flex;
  padding:10px 20px;
  box-sizing:border-box;
  border-radius:5px;
  border:1px solid #dcdcdc;
  margin-bottom:10px;
  .pic{
    margin-right:10px;
    width: 60px;
    height: 60px;
    opacity: .85;
  }
`
export const DownAppRight = styled.div`
   flex:1;
   display:flex;
   flex-direction:column;
   justify-content: space-evenly;
  .downTitle{
    font-size: 15px;
    color: #333;
  }
  .downDesc{
    font-size: 13px;
    color: #999;
  }
`
export const AdvertiseWrapper = styled.div`
   margin-bottom:10px;
  .pic{
    width:100%;
    height:160px;
    border-radius:4px;
  }
`
export const WriterWrapper = styled.div`
   width:100%;
`
export const WriterTop = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:20px;
  font-size: 14px;
  color: #969696;
`
export const WriterMiddle = styled.ul`
  display:flex;
  flex-direction:column;    
`
export const WriterMiddleItem = styled.li`
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;
    .userPic{
       border-radius:50%;
       width:48px;
       height:48px;
    }
    .guanzhu{
      font-size: 13px;
      color: #42c02e;
    }
`

export const MiddleItemWrapper = styled.div`
   display:flex;
   flex-direction:column;
   flex:1;
   padding:0 10px;
   box-sizimg:border-size;
   justify-content: space-evenly;
   .username{
      font-size:14px;
      color:#333;
   }
   .desc{
      font-size: 12px;
      color: #969696;
   }
`
export const WriterBottom = styled.div`
   width:100%;
   padding:10px 0;
   border:1px solid #dcdcdc;
   border-radius:4px;
   background-color:#f7f7f7;
   text-align:center;
   color:#787878;
   font-size:13px;

`

export const LoadMoreArticle = styled.div`
  width:100%;
  padding:10px 0;
  border:1px solid #dcdcdc;
  border-radius:20px;
  background-color:#a5a5a5
  color:#fff;
  font-size:14px;
  text-align:center;
  margin:30px 0;
  cursor:pointer;
`

export const ScrollTop = styled.div`
  position:fixed;
  right:100px;
  bottom:100px;
  width:50px;
  height:50px;
  line-height:50px;
  text-align:center;
  border:1px solid #ccc;
  font-size:14px;
  cursor:pointer;
`


