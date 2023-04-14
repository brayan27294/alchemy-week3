import React, { useEffect, useState } from 'react';
import SearchAccountForm from '../Components/Account/SearchAccountForm';
import { Utils } from 'alchemy-sdk';
import axios from 'axios';
import { Typography } from '@mui/material';

const Accounts = ({alchemy}) => {
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);
    const [etherToUsd, setEtherToUSD] = useState(null);

    useEffect(()=> {
        if(account){
            const getBalance = async() => {
                setBalance(null);
                const response = await await alchemy.core.getBalance(account, 'latest');
                setBalance(response._hex);
                const responseEther = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
                setEtherToUSD(responseEther.data.ethereum.usd);
            }
            getBalance();
        }
    },[account, alchemy.core]);

    return (
    <>
        <SearchAccountForm setAccount={setAccount} />
        <Typography variant="h5" component="div">
                Account Balance
        </Typography>
        {balance && <p>{Utils.formatUnits(balance, 'ether')} ETH</p>}
        {balance && etherToUsd && <p>{(Utils.formatUnits(balance, 'ether')*etherToUsd).toFixed(2)} USD</p>}
    </>);
}

export default Accounts;