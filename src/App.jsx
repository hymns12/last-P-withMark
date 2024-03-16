import './App.css';

import { Hearder } from './componet/Hearder';
import '@radix-ui/themes/styles.css';
import { configureWeb3Modal } from './connettor/index';

configureWeb3Modal();

function App() {


  return (
    <>
     <Hearder />
    </>
  )
}

export default App;
