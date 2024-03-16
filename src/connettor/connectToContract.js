import { ethers } from "ethers";

export const connectToContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const contractAddress = "THE_CONTRACT_ADDRESS";
    const contractAbi = [ ] // The Abi Of My Contract in here 

    const StackingContract = new ethers.Contract(contractAddress, contractAbi, provider.getSiner());

    return StackingContract;
}