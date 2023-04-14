import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Utils } from 'alchemy-sdk';

const BlockDetails = ({ethBlock}) => {
    const blockHash = ethBlock.hash;
    const blockParentHash = ethBlock.parentHash;
    const gas = parseInt(ethBlock.gasUsed._hex);
    const gasLimit = parseInt(ethBlock.gasLimit._hex);
    const blockMiner = ethBlock.miner;
    const baseFee = ethBlock.baseFeePerGas._hex;
    const difficulty = parseInt(ethBlock._difficulty._hex);
    console.log(ethBlock);
    return (
        <Grid item xs={12}>
            <Typography variant="h5" component="div">
                Block Details
            </Typography>
            <ul>
                <li><b>Block Number:</b> {ethBlock.number.toLocaleString('en-US')}</li>
                <li><b>Hash:</b> {blockHash.slice(0,6)}...{blockHash.slice(-6)}</li>
                <li><b>Parent Hash:</b> {blockParentHash.slice(0,6)}...{blockParentHash.slice(-6)}</li>
                <li><b>Nonce:</b> {parseInt(ethBlock.nonce)}</li>
                <li><b>Gas:</b> {gas.toLocaleString('en-US')}</li>
                <li><b>Gas Limit:</b> {gasLimit.toLocaleString('en-US')}</li>
                <li><b>Gast Used (%):</b> {(gas*100/gasLimit).toFixed(2)}%</li>
                <li><b>Miner:</b> {blockMiner.slice(0,6)}...{blockMiner.slice(-6)}</li>
                <li><b>Base Fee Per Gas:</b> {Utils.formatUnits(baseFee, 'ether')} ETH ({Utils.formatUnits(baseFee, 'gwei')} Gwei)</li>
                <li><b>Difficulty:</b> {difficulty}</li>
            </ul>
        </Grid>
    );
}

export default BlockDetails;