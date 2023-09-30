/** @format */


import styled from "styled-components";

const Wrapper = styled.div`
header{
    border-bottom: 1px solid black;
    margin: 0px 15px;
}

.header_single_item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0px 15px 0px;
}
.header_logo{}
.header_logo h2{
    font-size: 30px;
    font-weight: 600;
    color: #000000;
}

.header_buttons{
    display: flex;
    align-items: center;
    column-gap: 20px;
}

.headerIcon{
    display: flex;
    align-items: center;
    column-gap: 4px;

}
.headerIcon a{
    display: flex;
    color: #000000;
    border: 1px solid #818a91;
    padding: 3px;
}
.header_mint{}
.header_mint a{
    font-size: 30px;
    font-weight: 600;
    color: #000000;
    border: 1px solid #000000;
    display: flex;
    text-decoration: none;
    line-height: 28px;
    padding: 0px 8px;
}

@media (max-width: 575.98px) {
  .header_single_item {

    display: block;
}
 .headerIcon {
display: none;
}
 .header_mint a {
    width: 100%;
    justify-content: center;
}
.header_mint{
    width: 100%;
    margin-top: 30px;
}
.col-md-12 {

    padding-right: 0;
    padding-left: 0;
}
}
.banner{
    padding-top: 125px;
    padding-bottom: 80px;
}
.banner_single_item{
    text-align: center;
}
.banner_header{
    position: relative;

}
.banner_header::after{
    content: '';
    position: absolute;
    top: auto;
    width: 190px;
    height: 1px;
    background-color: black;
    left: 50%;
    transform: translate(-50%,0%);
    bottom: -10px;

}
.banner_header h1{
    font-size: 58px;
    font-weight: 600;
    color: #000000;

}
.banner_pera{
    padding-top: 45px;
    padding-bottom: 35px;
}
.banner_pera p{
    font-size: 30px;
    font-weight: 600;
}
.banner_buttons{
    display: inline-block;
    text-align: center;
}
.socialButton{
    margin-bottom: 33px;
}
.banner_buttons a{
  
    text-decoration: none;

    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
    color: #000000;
    /* display: flex;
    align-items: center; */
    padding: 3px 5px;
    font-weight: 500;
    
}
.banner_buttons a span{
    /* display: flex; */

   
}

@media (max-width:992px) {
    .banner_header h1 {
    font-size: 48px;
}
.banner_pera p {
    font-size: 28px;
}
    
}
@media (max-width:767.98px) {
.banner_header h1 {
    font-size: 41px;
}
.banner_pera p {
    font-size: 25px;
}
.banner{
    padding-top: 85px;
}
}
@media (max-width:575.98px) {

.banner_header h1 {
    font-size: 24px;
}
 .banner_pera p {
    font-size: 18px;
}
.banner {
    padding: 60px 15px;
}
}


/* step start here */
.step{}

.step_single_item{
    border: 1px solid #000000;
    padding: 10px;
    min-height: 235px;
    margin-right: 5px;
}

.step_number{
    border-bottom: 1px solid #000000;
 }
.step_number h1{

    font-size: 30px;
    font-weight: 600;
    color: #000000;
    padding-bottom: 10px;
} 
.step_pera{
    padding: 20px 0px;
}
.step_pera p{
    font-size: 18px;
    font-weight: 600;
}



@media (max-width:1192px) {
.step_pera p {
    font-size: 17px;
  
}
    
}
@media (max-width:767.98px) {
    .col-mg{
        
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;

    }
    
}
@media (max-width:575.98px) {
    .col-mg{
        
    padding: 0px 15px;

    }
    
}
.easyStep{
    padding-top: 20px;
}

.easy_step{
    border: 1px solid black;
    margin-right: 5px;
    min-height: 310px;
}

.profile_item{
    padding: 25px 0px;
    text-align: center;
}
.profile_item h3{
    font-size: 20px;
    font-weight: 500;
    display: inline-block;
    border: 1px solid black;
    padding: 5px;
}
.profile_item p{
    font-size: 18px;
    font-weight: 600;
    padding-top: 25px;
}
.generate{}
.generate h3{
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    border: 1px solid black;
    padding: 20px 0px;
}
.mint_step{
    text-align: center;
}
.mint_step h3{
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    padding: 5px;
    border: 1px solid black;
    margin-top: 20px;
    display: inline-block;
    margin-bottom: 40px;

}
.before_after{
    min-height: 310px;
    text-align: center;
    border: 1px solid black;
}
.before_after img{}

@media (max-width:1192px) {
    .profile_item p {
    font-size: 16px;

}
    
}
@media (max-width:992px) {

    .before_after,.easy_step{
    min-height: 315px;

}
}
@media (max-width: 767.98px) {
    .col_sm-full{
        flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 5px;
    }
    
}
@media (max-width: 575.98px) {
    .col_sm-full{
        flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 5px;
    padding: 0px 15px;
    }
    
}
/* step end here */


/* equality start here */
.equality{
    padding-top: 135px;
}
.equality_content{
    text-align: center;
}
.equality_content h2{
    font-size: 56px;
    font-weight: 600;
    color: #000000;
}
.equality_content p{
    font-size: 30px;
    font-weight: 600;
    margin-top: 10px;
}

/* equality end here */

/* filter images start here */

.filterImages{
    border: 1px solid black;
    margin-top: 40px;
}
.filterBorder{
   
    padding: 8px;
}
.filterBorder img{
    border: 1px solid black;
}
/* filter images end here */

@media (max-width:1192px) {
    .equality_content h2 {
font-size: 48px;

}
.equality_content p {
    font-size: 28px;
 
}
}
@media (max-width: 992px) {
.equality_content h2 {
    font-size: 46px;
}
 .equality_content p {
    font-size: 25px;
  
}
}
@media (max-width:767.98px) {
 .equality {
    padding-top: 85px;
}
    .equality_content h2 {
    font-size: 37px;
}
.equality_content p {
    font-size: 19px;
}
    
}
@media (max-width:575.98px) {
    .equality {
    padding: 0px 15px;
    padding-top: 85px;
}
    .equality_content h2 {
    font-size: 31px;
} 
 .equality_content p {
    font-size: 16px;
}
.filterBorder{
    flex: 0 0 100%;
    max-width: 100%;
}
}

/* support start here */
.support{
    padding: 76px 0px;
}
.supporterRow{
    align-items: center;
}
.maintitle{}
.maintitle h2{
    font-size: 58px;
    font-weight: 600;
    color: #000000;
}
.col-height{

    padding-right: 8px;
    margin-bottom: 8px;
}
.box{
    height: 74px;
    border: 1px solid black;
}
@media (max-width:1192px) {
    .maintitle h2 {
    font-size: 49px;

}
    
}
@media (max-width: 992px) {
    .maintitle h2 {
    font-size: 38px;
}
    
}
@media (max-width:767.98px) {
    .supportCol{
        flex: 0 0 100%;
        max-width: 100%;
    }
    .maintitle h2 {
  text-align: center;
  margin-bottom: 30px;
}
    
}
@media (max-width: 575.98px) {
    .col-height{
        flex: 0 0 100%;
        max-width: 100%;
    }
    .supporterRow{
        padding: 0px 15px;
        margin-right: 0;
        margin-left: 0;
    }
.maintitle h2 {
    font-size: 32px;
}
}
/* support end here */

/* footer  */
footer{}
.footerTitle{
    border-top: 1px solid black;
    padding: 15px 0px 25px 0px;
}
.footerTitle h3{

}

@media (max-width:575.98px) {
    .footerTitle{
    border-top: 1px solid black;
    padding: 15px 0px 25px 0px;
    margin: 0px 15px;
}
    
}
/* footer end here */
`;
export default Wrapper;
