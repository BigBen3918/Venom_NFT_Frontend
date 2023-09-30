import React, { useEffect, useRef } from "react";
import Wrapper from './Main.styled'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { NavHashLink } from "react-router-hash-link";
import before from "../../images/befor_after.png"
import ImagesFilter from "../../images/BeforeAfter3.png"
import ImagesFilter2 from "../../images/beforeAfter2.png"
import AOS from "aos";
function Main() {
  AOS.init();
  return (
<Wrapper>
  {/* header start here */}
<header>
  <div className="container">
    <div className="row">

      <div className="col-md-12">
        {/* single item header */}
      <div className="header_single_item">
        <div className="header_logo">
          <h2>noprofile</h2>
        </div>
        {/* header icons and button */}

        <div className="header_buttons">
          <div className="headerIcon">
          <Link to="/" target="_blank"> <Icon icon="uil:telegram" /></Link>
          <Link to="/" target="_blank"> <Icon icon="ant-design:twitter-outlined" /></Link>
          <Link to="/" target="_blank"> <Icon icon="humbleicons:link" /></Link>
          </div>
          <div className="header_mint">
          <NavHashLink to="/wallet">mint</NavHashLink>
        </div>
        </div>
      
      </div>
      {/* header single item end here */}
      </div>
    </div>
  </div>
</header>

{/* header end here */}


{/* banner start here */}

<div className="banner">
  <div className="container">
    <div className="row">
<div className="col-md-12">
<div className="banner_single_item"  data-aos="fade-up"  data-aos-duration="2000">
<div className="banner_header">
  <h1>The art of anonymity</h1>
</div>
<div className="banner_pera">
  <p>Embrace the enigma, celebrate the hidden, and rediscover the art of anonymity in the digital age.</p>
</div>
<div className="banner_buttons">
 <div className="socialButton">
 <Link to="/"><span><Icon icon="jam:twitter" /></span> Check it on X</Link>
 </div>
 <div className="socialButton">
 <Link to="/"><span><Icon icon="bxl:telegram" /></span> Check it on Telegram</Link>
 </div>
<div className="socialButton">
<Link to="/"><span><Icon icon="bxl:telegram" /></span> Check it on Mirror</Link>
</div>
</div>
        </div>
</div>
    </div>
  </div>
</div>
{/* banner end here */}
    


<div className="step">
  <div className="container">
    <div className="row">
      {/* singel item start here */}
      <div className="col-md-4 col-mg">
        <div className="step_single_item">
          <div className="step_number">
            <h1>1</h1>
          </div>
          <div className="step_pera">
            <p>Raising awareness about equality issues and advocating for change is essential to creating a more equitable online environment.</p>
          </div>
        </div>
      </div>
      {/* single iteme end here */}
            {/* singel item start here */}
            <div className="col-md-4 col-mg">
        <div className="step_single_item">
          <div className="step_number">
            <h1>2</h1>
          </div>
          <div className="step_pera">
            <p>Creating fairness PFP NFTs with the same color tone and style for everyone contributes to a more inclusive and equitable NFT space.</p>
          </div>
        </div>
      </div>
      {/* single iteme end here */}



 {/* singel item start here */}
<div className="col-md-4 col-mg">
        <div className="step_single_item">
          <div className="step_number">
            <h1>3</h1>
          </div>
          <div className="step_pera">
            <p>Returning everything to a default profile to eliminate the digital divide and make it equal is an ambitious goal and challenges.</p>
          </div>
        </div>
      </div>
      {/* single iteme end here */}
    </div>
    <div className="row easyStep">
      <div className="col-md-4 col_sm-full">
        <div className="easy_step">
          <div className="profile_item">
            <h3>Easy Step</h3>
            <p>Upload your photo for No Profile

</p>
          </div>
          <div className="generate">
            <h3>Generate</h3>
          </div>
          <div className="mint_step">
          <h3>Mint</h3>
          </div>
        </div>
      </div>
      <div className="col-md-8 col_sm-full">
        <div className="before_after">
          <img src={before} className="img-fluid" alt="before" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</div>

{/* equality start here */}

<div className="equality">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="equality_content">
          <h2>
          Equality, Accessibility, Privacy
          </h2>
          <p>Mandating a default profile for everyone could infringe on individual choice and personalization. Many users appreciate the ability to customize their online presence. But that is your choice.</p>
        </div>
      </div>
    </div>
    <div className="row filterImages">

        <div className="col-md-6 filterBorder">
<img src={ImagesFilter} className="img-fluid" alt="filter" loading="lazy" />
        </div>
        <div className="col-md-6 filterBorder">
<img src={ImagesFilter2} className="img-fluid" alt="filter" loading="lazy" />
        </div>
      </div>

  </div>
</div>
{/* equality end here */}

{/* support start here */}

<div className="support">
  <div className="container">
    <div className="row supporterRow">
      <div className="col-md-4 supportCol">
        <div className="maintitle">
          <h2>Partner and Supporter</h2>
        </div>
      </div>
      <div className="col-md-8 supportCol">
        <div className="row">
          <div className="col-md-4 col-height">
          <div className="box"></div>
          </div>
          <div className="col-md-4 col-height">
          <div className="box"></div>
            </div>
            <div className="col-md-4 col-height">
            <div className="box"></div>
            </div>
            <div className="col-md-4 col-height">
            <div className="box"></div>
            </div>
            <div className="col-md-4 col-height">
            <div className="box"></div>
            </div>
            <div className="col-md-4 col-height">
            <div className="box"></div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* support end here */}


{/* footer start here */}

<footer>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="footerTitle">
          <h3>noprofile @2023</h3>
        </div>
      </div>
    </div>
  </div>
</footer>

{/* footer end here */}
</Wrapper>
  )
}

export default Main