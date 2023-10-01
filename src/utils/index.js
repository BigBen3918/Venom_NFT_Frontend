import nftAbi from "../Contract/Nft.abi.json";
import indexAbi from "../Contract/Index.abi.json";
import BigNumber from "bignumber.js";

export const styledAddress = (address) => {
    return address.slice(0, 10) + "..." + address.slice(-5);
};

const getNftImage = async (provider, nftAddress) => {
    const nftContract = new provider.Contract(nftAbi, nftAddress);
    // calling getJson function of NFT contract
    const getJsonAnswer = await nftContract.methods
        .getJson({ answerId: 0 })
        .call();
    const json = JSON.parse(getJsonAnswer.json ?? "{}");

    return json.preview.source || "";
};

// Returns array with NFT's images urls
export const getCollectionItems = async (provider, nftAddresses) => {
    return Promise.all(
        nftAddresses.map(async (nftAddress) => {
            const imgInfo = await getNftImage(provider, nftAddress);
            return imgInfo;
        })
    );
};

export const getNftsByIndexes = async (provider, indexAddresses) => {
    const nftAddresses = await Promise.all(
        indexAddresses.map(async (indexAddress) => {
            console.log(indexAddress);
            const indexContract = new provider.Contract(indexAbi, indexAddress);
            const indexInfo = await indexContract.methods
                .getInfo({ answerId: 0 })
                .call();
            return indexInfo.nft;
        })
    );
    return getCollectionItems(provider, nftAddresses);
};

export const toNano = (amount) => new BigNumber(amount).shiftedBy(9).toFixed(0);
