import React from 'react';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const StackingContracts = () => {

    const [provider, setProvider] = useState(); // state var
    const [StackingContract, setStackingContract] = useState();
    const [poolData, setPoolDate] = useState([]);
    const [selectedPoolId, setSelectedPoolId] = useState(0);
    const [userStckeBalance, setUserStckeBalance] = useState(0);
    const [userReward, setUserReward] = useState(0);

    useEffect(() => {
        const init = async () => {
            const pools = await getPools();
            setPoolDate(pools);

            const getPools = async () => {
                const totalPools = await StackingContract.id();
                const pools = [];
                for (let i = 0; i < totalPools.length; i++) {
                    const pool = await StackingContract.getPoolByID(i)
                    pools.push(pool);
                }
                return pools;
            }

            const updateUserDate = async (userAddress) => {
                const poolId = selectedPoolId;
                const userStckeBalance = await StackingContract.getUserStakeBalance(poolId, userAddress);
                setUserStckeBalance(userReward);

                const userReward = await StackingContract.getUserClaimableReward(poolId, userAddress);
                setUserReward(userReward);
            };

            const heandleStake = async () => {
                const amount = parseFloat(window.prompt('Enter your Staking amouunt here'));
                if (!amount || isNaN(amount)) {
                    alert('how there you come in to Spidy web and Dont want to stake fuck you');
                    return;
                }
                try {
                    await StackingContract.stake(selectedPoolId, ethers.uitls.parseEther(amount.toString()));
                }catch (error) {
                    console.error("There is an Error staking:", error);
                    alert("Error Staking. pls chat Spidy on whatsapp");
                }
            };

            const handlePoolSelection = async (poolId) => {
                setSelectedPoolId(poolId);
                await updateUserDate(await provider.getSineer().getAddress)
            };
        }
    });

}