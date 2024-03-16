import { ethers } from "ethers";
import ABI from './abi.json'
import { useWeb3Modal, useWeb3ModalProvider } from "@web3modal/ethers/react";

export const connectToContract = () => {
    const {walletProvider} = useWeb3ModalProvider()
    const provider = new ethers.providers.Web3Provider(walletProvider);
    const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS; // import contract Adderss form ENV file
    // const contractAbi = [ ] // The Abi Of My Contract in here 

    const StackingContract = new ethers.Contract(contractAddress, ABI, provider.getSiner());

    return StackingContract;
}

export  default connectToContract;