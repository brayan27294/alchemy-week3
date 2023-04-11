import React from 'react';
import { Grid } from '@mui/material';
import { Utils } from 'alchemy-sdk';

const BlockDetails = ({ethBlock}) => {
    const gas = parseInt(ethBlock.gasUsed._hex);
    const gasLimit = parseInt(ethBlock.gasLimit._hex);
    const baseFee = parseInt(ethBlock.baseFeePerGas._hex);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ul>
                    <li><b>Block Number:</b> {ethBlock.number}</li>
                    <li><b>Hash:</b> {ethBlock.hash}</li>
                    <li><b>Parent Hash:</b> {ethBlock.parentHash}</li>
                    <li><b>Nonce:</b> {ethBlock.nonce}</li>
                    <li><b>Gas:</b> {gas}</li>
                    <li><b>Gas Limit:</b> {gasLimit}</li>
                    <li><b>Gast Used (%):</b> {(gas*100/gasLimit).toFixed(2)}%</li>
                    <li><b>Miner:</b> {ethBlock.miner}</li>
                    <li><b>Base Fee Per Gas:</b> {baseFee}</li>
                </ul>
            </Grid>
        </Grid>
    );
}

export default BlockDetails;