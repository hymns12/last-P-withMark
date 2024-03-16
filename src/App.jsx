import './App.css';
// import { connettor } from '../connettor/connectToContract';
import { Hearder } from './componet/Hearder';
import '@radix-ui/themes/styles.css';
import { configureWeb3Modal } from './connettor/index';
import { Container, Flex, Theme } from '@radix-ui/themes';

configureWeb3Modal();

function App({poolData, heandleStake, handleUnstake, handleClaimReward, handlePoolSelection, userStakeBalance, userRewardPerSec}) {


  return (
    <>
    <Theme>
      <Hearder />
          <Container>
          <Flex my={'8'} align={'center'} className='justify-between ' gap={'20'}>
              <span>
                <h2>stacking pool Information</h2>
                      <p>total stake: {poolData?.totalStakers}</p>
                      <p>total staked: {poolData?.totalStaked}</p>
                      <p>Reward Reserve: {poolData?.rewardRate}</p>
                      <p>Reward Rate: {poolData?.rewardRate}</p>
                      <p>Your Stake Balance: {userStakeBalance}</p>
                      <p>Your Reward Per Second: {userRewardPerSec}</p>
              </span>
              
              <span>
                    <button onClick={() => heandleStake}>button1</button>
                    <button onClick={() => handleUnstake}>button2</button>
                    <button onClick={() => handleClaimReward}>button3</button>
                    <button onClick={() => handlePoolSelection}>button4</button>
                </span>
          </Flex>
      </Container>

    </Theme>
     
    </>
  )
}

export default App;
