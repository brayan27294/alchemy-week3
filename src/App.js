import { ThemeProvider } from '@mui/styles';
import { CssBaseline, createTheme } from '@mui/material';
import { Alchemy, Network } from 'alchemy-sdk';
import Layout from './Components/ui/Layout';
import './App.css';
import CustomTab from './Components/ui/CustomTab';
import EtherExplorer from './Pages/EtherExplorer';
import Accounts from './Pages/Accounts';

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
  const options = [
    {
      label: 'Block Explorer',
      opt: <EtherExplorer alchemy={alchemy} />
    },
    {
      label: 'Accounts',
      opt: <Accounts alchemy={alchemy} />
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <CustomTab options={options}/>
      </Layout>
    </ThemeProvider>);  
};

export default App;
