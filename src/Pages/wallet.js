import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Address } from "everscale-inpage-provider";
import { Icon } from "@iconify/react";
import Wrapper from "./wallet.styled";
import before from "../images/filter.png";
import NoProfile from "../images/profile.png";
import { styledAddress } from "../utils";
import collectionAbi from "../Contract/Collection.abi.json";
import { getCollectionItems } from "../utils";
import axios from "axios";

// Our implemented util
import config from "../config/config.json";
import { toNano } from "../utils";

function Wallet(props) {
    const { venomConnect } = props;

    const [loading, setLoading] = useState(false);
    const [venomProvider, setVenomProvider] = useState();
    const [standaloneProvider, setStandAloneProvider] = useState();
    const [address, setAddress] = useState();
    const [collectionItems, setCollectionItem] = useState([]);
    const [selectedFile, setSeletedFile] = useState(null);

    useEffect(() => {
        var off = null;
        if (venomConnect) {
            off = venomConnect.on("connect", onConnect);
            initStandalone();
            checkAuth(venomConnect);
        }
        return () => {
            if (off) off();
        };
    }, [venomConnect]);

    const getAddress = async (provider) => {
        const providerState = await provider.getProviderState();
        return providerState.permissions.accountInteraction.address.toString();
    };

    const checkAuth = async (_venomConnect) => {
        const auth = await _venomConnect.checkAuth();
        if (auth) await getAddress(_venomConnect);
    };

    const initStandalone = async () => {
        const standalone = await venomConnect.getStandalone();
        setStandAloneProvider(standalone);
    };

    const onDisconnect = async () => {
        venomProvider.disconnect();
        setAddress(undefined);
    };

    const onLogin = async () => {
        if (!venomConnect) return;
        await venomConnect.connect();
    };

    const onConnect = async (provider) => {
        setVenomProvider(provider);
        await onProviderReady(provider);
    };

    const onProviderReady = async (provider) => {
        const venomWalletAddress = provider ? await getAddress(provider) : "";
        setAddress(venomWalletAddress);
    };

    // Collection
    useEffect(() => {
        // if (standaloneProvider) loadNFTs(standaloneProvider);
    }, [standaloneProvider]);

    const getNftCodeHash = async (provider) => {
        const col_address = new Address(config.collectionAddress);
        const contract = new provider.Contract(collectionAbi, col_address);
        const { codeHash } = await contract.methods
            .nftCodeHash({ answerId: 0 })
            .call({ responsible: true });
        // eslint-disable-next-line no-undef
        return BigInt(codeHash).toString(16);
    };

    const getNftAddresses = async (codeHash) => {
        const addresses = await standaloneProvider.getAccountsByCodeHash({
            codeHash,
        });
        return addresses.accounts;
    };

    const loadNFTs = async (provider) => {
        try {
            const nftCodeHash = await getNftCodeHash(provider);
            if (!nftCodeHash) {
                return;
            }
            const nftAddresses = await getNftAddresses(nftCodeHash);
            if (!nftAddresses || !nftAddresses.length) {
                return;
            }
            const nftURLs = await getCollectionItems(provider, nftAddresses);
            setCollectionItem(nftURLs);
            console.log(nftURLs);
        } catch (e) {
            console.error(e);
        }
    };

    // Action
    const handleImgChange = async (event) => {
        if (selectedFile) {
            setSeletedFile(null);
        }
        const newImage = event.target?.files?.[0];
        if (newImage) {
            try {
                setSeletedFile(newImage);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const mint = async () => {
        try {
            setLoading(true);
            if (!address) {
                alert("please connect venom wallet");
                setLoading(false);
                return;
            }
            if (!selectedFile) {
                alert("please select image");
                setLoading(false);
                return;
            }
            const formData = new FormData();
            formData.append("file", selectedFile);
            const resFile = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    pinata_api_key: config.key,
                    pinata_secret_api_key: config.secret_key,
                    "Content-Type": "multipart/form-data",
                },
            });
            const ImgHash = `https://ipfs.io/ipfs/${resFile.data.IpfsHash}`;
            const col_address = new Address(config.collectionAddress);
            if (!venomProvider) {
                setLoading(false);
                return;
            }
            const contract = await new venomProvider.Contract(
                collectionAbi,
                col_address
            );
            const { count } = await contract.methods
                .totalSupply({ answerId: 0 })
                .call();
            const nft_modal = {
                type: "Basic NFT",
                id: count + 1,
                name: `Test Net #${count + 1}`,
                description:
                    "No Profile NFT is committed to fostering equality through PFP (Profile Picture) NFTs, all sharing a consistent color tone and style. Powered by the Venom Blockchain, No Profile NFTs are the future of digital art.",
                preview: {
                    source: ImgHash,
                    mimetype: "image/png",
                },
                files: [
                    {
                        source: "",
                        mimetype: "metadata/json",
                    },
                ],
                attributes: [],
                external_url: "",
            };
            const minterAddress = new Address(address.toString());
            await contract.methods
                .mintNft({ json: JSON.stringify(nft_modal) })
                .send({ from: minterAddress, amount: toNano(0.2) });
            const { nft: nftAddress } = await contract.methods
                .nftAddress({ answerId: 0, id: count })
                .call();
            alert(`Mint Success!!! - ${nftAddress}`);
            setLoading(false);
        } catch (err) {
            console.log(err);
            alert("Failed Mint");
            setLoading(false);
        }
    };

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

            {/* <div className="comming_soon">
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
            </div> */}

            {/* comming soon end here */}

            {/* connect wallet start here */}

            <div className="container">
                <div className="row easyStep processRow">
                    <div className="col-md-4 col_sm-full">
                        <div className="easy_step processStep">
                            <div className="profile_item">
                                {address ? (
                                    <button onClick={onDisconnect}>
                                        {styledAddress(address)}
                                    </button>
                                ) : (
                                    <button onClick={onLogin}>
                                        Connect Wallet
                                    </button>
                                )}
                                <p>Upload your photo for No Profile</p>
                            </div>
                            <div className="generate">
                                <div>
                                    <input
                                        type="button"
                                        className="btn-main"
                                        value={
                                            selectedFile
                                                ? selectedFile.name.length > 12
                                                    ? selectedFile.name.slice(
                                                          0,
                                                          12
                                                      ) + "..."
                                                    : selectedFile.name
                                                : "Choose File"
                                        }
                                    />
                                    <input
                                        id="upload_file"
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImgChange}
                                    />
                                </div>
                            </div>
                            <div className="process">
                                <h4>Generate procces</h4>
                            </div>
                            <div className="mint_step processMint">
                                {loading ? (
                                    <button>Minting...</button>
                                ) : (
                                    <button onClick={mint}>Mint</button>
                                )}
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
