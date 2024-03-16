import './App.css';
// import { connettor } from '../connettor/connectToContract';
import { Hearder } from './componet/Hearder';
import '@radix-ui/themes/styles.css';
import { configureWeb3Modal } from './connettor/index';
import { Container, Flex, Theme } from '@radix-ui/themes';
import { ethers, id } from 'ethers';
import connectToContract from './connettor/connectToContract';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import { Controller } from './controllers/ContractController';

configureWeb3Modal();

function App({poolData, heandleStake, handleUnstake, handleClaimReward, handlePoolSelection, userStakeBalance, userRewardPerSec}) {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const controller = new Controller(chainId, walletProvider);

  return (
    <>
    <Theme>
      <Hearder />
      <button onClick={async() => {
         await controller.createPool(ethers.parseUnits("100",18))
      }}>Create pool</button>
          <Container>
            <h2 
            style={{
              fontSize:'2rem', 
              fontWeight:'700', 
              marginTop: '10px', 
              textAlign:'center',
              fontFamily:'cursive' 
            }}
            >Stacking pool Information</h2>
          <Flex 
          my={'8'} 
          align={'center'} 
          className='justify-between ' 
          gap={'20'} 
          style={{
            border:'1px solid black', 
            padding: '20px', 
            borderRadius:'10px',

          }}
          >
              <span style={{fontSize:'20px', padding:'10px'}}>
                      <p>Total Stake: {poolData?.totalStakers}</p>
                      <p>Total Staked: {poolData?.totalStaked}</p>
                      <p>Reward Reserve: {poolData?.rewardRate}</p>
                      <p>Reward Rate: {poolData?.rewardRate}</p>
                      <p>Your Stake Balance: {userStakeBalance}</p>
                      <p>Your Reward Per Second: {userRewardPerSec}</p>
              </span>
              
              <span style={{flexDirection:'row'}}>
                    <button onClick={heandleStake}>button1</button>
                    <button onClick={() => handleUnstake(id)}>button2</button>
                    <button onClick={() => handleClaimReward(id)}>button3</button>
                    <button onClick={() => handlePoolSelection}>button4</button>
                </span>
          </Flex>
      </Container>

    </Theme>
     
    </>
  )
}

export default App;
