import styled from "styled-components";
import noteBanner from "../../statics/images/note-banner.png"


export const DetailWrapper = styled.div`
   overflow:hidden;
   width:960px;
   margin:0 auto;
   margin-top:100px;
`

export const DetailLeft = styled.div`
   width:620px;
   margin: 0 auto;
   .pic{
       width:100%;
       margin-bottom:30px;
   }
   p{
    color: #2f2f2f;
    word-break: break-word!important;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    margin-bottom:25px;
   }
`

export const DetailRight = styled.div`
  width:180px;
  position:fixed;
  top:100px;
  right:100px;
  .sideBanner{
      width: 100%;
      height: 260px;
      display:block;
      background-image: url(${noteBanner}); 
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50%;
      margin-bottom: 15px;
      .close{
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 24px;
      }
  }
  .youdaoBanner{
      width:100%;
      display:block;
      background:url("https://oimageb2.ydstatic.com/image?id=6887620750791615464&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60");
      height: 100px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
  }
`

export const DetailTitle = styled.div`
  font-size:34px;
  color:#333333;
  font-weight:bolder;
  margin:20px 0;
  width:100%;
  text-align:center;
`

export const Introduce = styled.div`
 width:100%;
 display:flex;
 justify-content:flex-start;
 margin:30px 0;
 img{
     border-radius:50%;
     width:48px;
     height:48px;
     margin-right:10px;
 }
`

export const IntroduceRight = styled.div`
 display:flex;
 flex:1;
 flex-direction:column;
 justify-content: space-between;
 .top{
    display:flex;
    align-items:center;
 }
.bottom{
    color:#969696;
    font-size:12px;
}
p{
    margin-bottom:0;
}

 .edit{
    margin:0 5px;
    width: 20px;
    height: 20px;
    border-radius: 0;
    border: 0;
 }
`

export const FollowBtn = styled.span`
    color: #fff;
    font-size: 12px;
    border-radius: 30px;
    background: #42c02e;
    padding: 0px 7px;
`

