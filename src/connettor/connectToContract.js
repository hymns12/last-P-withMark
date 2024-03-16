import { ethers } from "ethers";
import Dotenv from './abi.json'

export const connectToContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS; // import contract Adderss form ENV file
    const contractAbi = [ ] // The Abi Of My Contract in here 

    const StackingContract = new ethers.Contract(contractAddress, contractAbi, provider.getSiner());

    return StackingContract;
}