import './App.css';
import { connettor } from '../connettor/connectToContract';
import { Hearder } from './componet/Hearder';
import '@radix-ui/themes/styles.css';
import { configureWeb3Modal } from './connettor/index';

configureWeb3Modal();

function App({poolData, }) {


  return (
    <>
     <Hearder />
      <div>
        <h2>stacking pool Information</h2>
        <p>total stake: {poolData?.totalStakers}</p>
        <p>total staked: {poolData?.totalStaked}</p>
        <p>Reward Reserve: {poolData?.rewardRate}</p>
        <p>Reward Rate: {poolData?.rewardRate}</p>
        <p>Your Stake Balance: {userStakeBalance}</p>
        <p>Your Reward Per Second: {userRewardPerSec}</p>

        <button onClick={() => heandleStake}></button>
        <button onClick={() => }
      </div>
    </>
  )
}

export default App;
