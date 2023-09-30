/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
    header {
        border-bottom: 1px solid black;
        margin: 0px 15px;
    }

    .header_single_item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 0px 15px 0px;
    }
    .header_logo {
    }
    .header_logo h2 {
        font-size: 30px;
        font-weight: 600;
        color: #000000;
    }

    .header_buttons {
        display: flex;
        align-items: center;
        column-gap: 20px;
    }

    .headerIcon {
        display: flex;
        align-items: center;
        column-gap: 4px;
    }
    .headerIcon a {
        display: flex;
        color: #000000;
        border: 1px solid #818a91;
        padding: 3px;
    }
    .header_mint {
    }
    .header_mint a {
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
        .header_mint {
            width: 100%;
            margin-top: 30px;
        }
        .col-md-12 {
            padding-right: 0;
            padding-left: 0;
        }
    }

    /* header end here */

    /* comming soon start here */
    .comming_soon_title {
        padding-top: 50px;
    }
    .socialButton {
        display: flex;
        margin-top: 25px;
        margin-bottom: 20px;
    }
    .socialButton a {
        text-decoration: none;

        align-items: center;
        justify-content: center;
        border: 1px solid #000000;
        color: #000000;
        display: flex;
        align-items: center;
        padding: 3px 5px;
        font-weight: 500;
    }
    .socialButton a span {
        display: flex;
        align-items: center;
    }
    /* comming soon end here */

    /* connect wallet start here */
    .easyStep {
        padding-top: 20px;
    }

    .easy_step {
        border: 1px solid black;
        margin-right: 5px;
        min-height: 764px;
    }

    .profile_item {
        padding: 25px 0px;
        text-align: center;
    }
    .profile_item button {
        cursor: pointer;
        background: none;
        font-size: 20px;
        font-weight: 500;
        display: inline-block;
        border: 1px solid black;
        padding: 5px;

        &:hover {
            background: #eee;
        }
    }
    .profile_item p {
        font-size: 18px;
        font-weight: 600;
        padding-top: 25px;
    }
    .generate {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .generate button {
        background: none;
        outline: none;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        border: 1px solid black;
        padding: 20px 10px;
        cursor: pointer;
        &:hover {
            background: #eee;
        }
    }
    .mint_step {
        text-align: center;
    }
    .mint_step button {
        cursor: pointer;
        background: none;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        padding: 10px;
        border: 1px solid black;
        margin-top: 20px;
        display: inline-block;
        margin-bottom: 40px;

        &:hover {
            background: #eee;
        }
    }
    .before_after {
        min-height: 760px;
        text-align: center;
        border: 1px solid black;
    }
    .before_after img {
    }
    .process {
    }
    .process h4 {
        text-align: center;
        padding-top: 25px;
        font-size: 18px;
    }
    .processMint {
        margin-top: 20px;
    }
    @media (max-width: 1192px) {
        .profile_item p {
            font-size: 16px;
        }
    }
    @media (max-width: 992px) {
        .before_after,
        .easy_step {
            min-height: 315px;
        }
        .processStep {
            min-height: 484px;
        }
    }
    @media (max-width: 767.98px) {
        .col_sm-full {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 5px;
        }
        .processRow {
            flex-direction: column-reverse;
        }
        .processStep {
            min-height: auto;
        }
    }
    @media (max-width: 575.98px) {
        .col_sm-full {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 5px;
            padding: 0px 15px;
        }
    }

    /* cconnect wallete nd here */

    /* nfrs sart here */

    /* support start here */
    .support {
        padding: 5px 0px;
    }
    .supporterRow {
        align-items: center;
    }
    .nftsRow {
        padding: 0px 15px;
    }
    .maintitle {
    }
    .maintitle h2 {
        font-size: 58px;
        font-weight: 600;
        color: #000000;
    }
    .no_profile {
        border: 1px solid black;
    }
    .nftsCol {
        padding-right: 5px;
    }
    .nft {
        padding-bottom: 150px;
    }
    @media (max-width: 1192px) {
        .maintitle h2 {
            font-size: 49px;
        }
    }
    @media (max-width: 992px) {
        .maintitle h2 {
            font-size: 38px;
        }
    }
    @media (max-width: 767.98px) {
        .supportCol,
        .nftsCol {
            flex: 0 0 100%;
            max-width: 100%;
            margin-top: 5px;
        }
        .maintitle h2 {
            text-align: center;
            margin-bottom: 30px;
        }
    }
    @media (max-width: 575.98px) {
        .supporterRow {
            padding: 0px 15px;
            margin-right: 0;
            margin-left: 0;
        }
        .maintitle h2 {
            font-size: 32px;
        }
        .nftTitle h2 {
            font-size: 30px;
        }
    }
    /* support end here */

    /* nfts end here */

    /* latest mint */
    .latest_mint {
        padding-bottom: 175px;
    }
    .mint_main-title {
        padding-bottom: 50px;
        border-top: 1px solid black;
        padding-top: 40px;
    }
    .mint_main-title h3 {
        font-size: 58px;
        font-weight: 600;
        color: #000000;
        text-align: center;
    }
    .header_time {
        padding-bottom: 20px;
    }
    .header_time h3 {
    }
    .common_item {
        margin-bottom: 10px;
    }
    .common_item h5 {
        font-size: 18px;
        font-weight: 600;
    }

    @media (max-width: 575.98px) {
        .mint_main-title h3 {
            font-size: 43px;
        }
        .commonColMint {
            display: none;
        }
        .transCOl {
            flex: 0 0 100%;
            max-width: 100%;
        }
        .latestMintRow {
            padding: 0px 15px;
        }
    }

    /* latest mint end here */
    /* footer  */
    footer {
    }
    .footerTitle {
        border-top: 1px solid black;
        padding: 15px 0px 25px 0px;
    }
    .footerTitle h3 {
    }

    @media (max-width: 575.98px) {
        .footerTitle {
            border-top: 1px solid black;
            padding: 15px 0px 25px 0px;
            margin: 0px 15px;
        }
    }
    /* footer end here */
`;

export default Wrapper;
