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

            const handleUnstake = async () => { // Function to handle unstake action
                try {
                  await StackingContract.unstake(selectedPoolId); // Call unstake function on the contract
                  await updateUserDate(await provider.getSigner().getAddress()); // Update user data after unstake
                } catch (error) {
                  console.error("Error unstaking:", error); // Log error if unstake fails
                  alert("Error unstaking. Please try again."); // Show alert for unstake error
                }
              };

            const handleClaimReward = async () => { // Function to handle claim reward action
                try {
                  await StackingContract.claimReward(selectedPoolId); // Call claim reward function on the contract
                  await updateUserDate(await provider.getSigner().getAddress()); // Update user data after claiming reward
                } catch (error) {
                  console.error("Error claiming reward:", error); // Log error if claiming reward fails
                  alert("Error claiming reward. Please try again."); // Show alert for claiming reward error
                }
              };

            const handlePoolSelection = async (poolId) => {
                setSelectedPoolId(poolId);
                await updateUserDate(await provider.getSineer().getAddress);
            };
        }
    });

}