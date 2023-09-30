import React, { useEffect, useState } from "react";
import Wrapper from "./wallet.styled";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import before from "../images/filter.png";
import NoProfile from "../images/profile.png";
import { NavHashLink } from "react-router-hash-link";
import { VenomConnect } from "venom-connect";
import { Address, ProviderRpcClient } from "everscale-inpage-provider";
import { styledAddress } from "../utils";

function Wallet(props) {
    const { venomConnect } = props;

    const [venomProvider, setVenomProvider] = useState();
    const [standaloneProvider, setStandAloneProvider] = useState();
    const [address, setAddress] = useState("");

    useEffect(() => {
        // connect event handler
        var off = null;

        if (venomConnect) {
            off = venomConnect.on("connect", onConnect);
            initStandalone();
            checkAuth(venomConnect);
        }

        return () => {
            if (off) {
                off();
            }
        };
    }, [venomConnect]);

    // This method allows us to gen a wallet address from inpage provider
    const getAddress = async (provider) => {
        const providerState = await provider.getProviderState();
        return providerState.permissions.accountInteraction.address.toString();
    };

    // Any interaction with venom-wallet (address fetching is included) needs to be authentificated
    const checkAuth = async (_venomConnect) => {
        const auth = await _venomConnect.checkAuth();
        if (auth) await getAddress(_venomConnect);
    };
    // Method for getting a standalone provider from venomConnect instance
    const initStandalone = async () => {
        const standalone = await venomConnect.getStandalone();
        setStandAloneProvider(standalone);
    };
    // Handling click of login button. We need to call connect method of out VenomConnect instance, this action will call other connect handlers
    const onLogin = async () => {
        if (!venomConnect) return;
        await venomConnect.connect();
    };
    // This handler will be called after venomConnect.login() action
    // connect method returns provider to interact with wallet, so we just store it in state
    const onConnect = async (provider) => {
        setVenomProvider(provider);
        await onProviderReady(provider);
    };

    // When our provider is ready, we need to get address and balance from.
    const onProviderReady = async (provider) => {
        const venomWalletAddress = provider ? await getAddress(provider) : "";
        setAddress(venomWalletAddress);
    };

    const uploadImage = () => {};

    const mint = () => {};

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
                                        <Link to="/" target="_blank">
                                            {" "}
                                            <Icon icon="uil:telegram" />
                                        </Link>
                                        <Link to="/" target="_blank">
                                            {" "}
                                            <Icon icon="ant-design:twitter-outlined" />
                                        </Link>
                                        <Link to="/" target="_blank">
                                            {" "}
                                            <Icon icon="humbleicons:link" />
                                        </Link>
                                    </div>
                                    <div className="header_mint">
                                        <NavHashLink to="/">home</NavHashLink>
                                    </div>
                                </div>
                            </div>
                            {/* header single item end here */}
                        </div>
                    </div>
                </div>
            </header>

            {/* header end here */}

            {/* comming soon start here */}

            <div className="comming_soon">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="comming_soon_title">
                                <h3>*This Feature is Coming Soon</h3>
                                <div className="socialButton">
                                    <Link to="/">
                                        <span>
                                            <Icon icon="jam:twitter" />
                                        </span>{" "}
                                        Check it on X
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* comming soon end here */}

            {/* connect wallet start here */}

            <div className="container">
                <div className="row easyStep processRow">
                    <div className="col-md-4 col_sm-full">
                        <div className="easy_step processStep">
                            <div className="profile_item">
                                {address ? (
                                    styledAddress(address)
                                ) : (
                                    <button onClick={onLogin}>
                                        Connect Wallet
                                    </button>
                                )}

                                <p>Upload your photo for No Profile</p>
                            </div>
                            <div className="generate">
                                <button onClick={uploadImage}>
                                    Choose File <del>No File chosen</del>
                                </button>
                            </div>
                            <div className="process">
                                <h4>Generate procces</h4>
                            </div>
                            <div className="mint_step processMint">
                                <button onClick={mint}>Mint</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col_sm-full">
                        <div className="before_after">
                            <img
                                src={before}
                                className="img-fluid"
                                alt="before"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* connect wallet end here */}

            {/* nfts start here */}

            {/* support start here */}

            <div className="support nft">
                <div className="container">
                    <div className="row supporterRow nftsRow">
                        <div className="col-md-4 supportCol">
                            <div className="maintitle nftTitle">
                                <h2>Your Noprofile NFTs</h2>
                            </div>
                        </div>
                        <div className="col-md-8 supportCol">
                            <div className="row">
                                <div className="col-md-6 nftsCol">
                                    <div className="no_profile">
                                        <img
                                            src={NoProfile}
                                            className="img-fluid"
                                            alt="no-profile"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 nftsCol">
                                    <div className="no_profile ">
                                        <img
                                            src={NoProfile}
                                            className="img-fluid"
                                            alt="no-profile"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* support end here */}
            {/* nfts end here */}

            {/* latst min update */}

            <div className="latest_mint">
                <div className="container">
                    <div className="row latestMintRow">
                        <div className="col-md-12">
                            <div className="mint_main-title">
                                <h3>Latest Mint</h3>
                            </div>
                        </div>
                        {/* single items */}
                        <div className="col-md-3 commonColMint">
                            <div className="header_time">
                                <h3>Address </h3>
                            </div>
                            {/* single item  */}
                            <div className="latest_mint_address_item common_item">
                                <h5>0:70d…1f64</h5>
                            </div>

                            {/* single item end here */}
                            {/* single item  */}
                            <div className="latest_mint_address_item common_item">
                                <h5>0:70d…1f64</h5>
                            </div>

                            {/* single item end here */}
                            {/* single item  */}
                            <div className="latest_mint_address_item common_item">
                                <h5>0:70d…1f64</h5>
                            </div>

                            {/* single item end here */}
                            {/* single item  */}
                            <div className="latest_mint_address_item common_item">
                                <h5>0:70d…1f64</h5>
                            </div>

                            {/* single item end here */}
                            {/* single item  */}
                            <div className="latest_mint_address_item common_item">
                                <h5>0:70d…1f64</h5>
                            </div>

                            {/* single item end here */}
                        </div>
                        {/* single item end here */}

                        {/* single items */}
                        <div className="col-md-6 transCOl">
                            <div className="header_time">
                                <h3>Transaction ID</h3>
                            </div>
                            {/* single item  */}
                            <div className="latest_mint_transaction_item common_item">
                                <h5>………</h5>
                            </div>

                            {/* single item end here */}
                            {/* single item  */}
                            <div className="latest_mint_transaction_item common_item">
                                <h5>………</h5>
                            </div>

                            {/* single item end here */}
                            {/* single item  */}
                            <div className="latest_mint_transaction_item common_item">
                                <h5>………</h5>
                            </div>

                            {/* single item end here */}
                            {/* single item  */}
                            <div className="latest_mint_transaction_item common_item">
                                <h5>………</h5>
                            </div>

                            {/* single item end here */}
                            {/* single item  */}
                            <div className="latest_mint_transaction_item common_item">
                                <h5>………</h5>
                            </div>

                            {/* single item end here */}
                        </div>
                        {/* single item end here */}

                        {/* single items */}
                        <div className="col-md-3 commonColMint">
                            <div className="header_time">
                                <h3>Time</h3>
                            </div>
                            <div className="latest_mint_time_item common_item">
                                <h5>1 min ago</h5>
                            </div>

                            {/* single item  */}

                            <div className="latest_mint_time_item common_item">
                                <h5>1 min ago</h5>
                            </div>

                            {/* single item end */}

                            {/* single item  */}

                            <div className="latest_mint_time_item common_item">
                                <h5>1 min ago</h5>
                            </div>

                            {/* single item end */}

                            {/* single item  */}

                            <div className="latest_mint_time_item common_item">
                                <h5>1 min ago</h5>
                            </div>

                            {/* single item end */}

                            {/* single item  */}

                            <div className="latest_mint_time_item common_item">
                                <h5>1 min ago</h5>
                            </div>

                            {/* single item end */}
                        </div>
                        {/* single item end here */}
                    </div>
                </div>
            </div>

            {/* lates mint update end here */}
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
    );
}

export default Wallet;
