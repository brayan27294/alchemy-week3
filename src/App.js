
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/styles';
import { Button, CssBaseline, createTheme } from '@mui/material';
import { Alchemy, Network } from 'alchemy-sdk';
import Layout from './Components/ui/Layout';
import ListOfBlocks from './Components/Block/ListOfBlocks';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(128,128,128)',
    },
  },
});

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

const App = () => {
  const [blockNumber, setBlockNumber] = useState(null);

  const reloadData = async() => {
      setBlockNumber(await alchemy.core.getBlockNumber());
  };

  useEffect(()=>{
    reloadData();
  },[]);

  return (
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Button onClick={reloadData} variant='contained'>Reload Data</Button>
        <ListOfBlocks blockNumber={blockNumber} alchemy={alchemy}/>
      </Layout>
  </ThemeProvider>);
}

export default App;
