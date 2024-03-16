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
