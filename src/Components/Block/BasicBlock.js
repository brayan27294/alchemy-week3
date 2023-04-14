import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const BasicBlock = ({ethBlock, onSelectBlock}) => {
  const blockMiner = ethBlock.miner;
  return (
    <Card sx={{ minWidth: 50 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Block Number
        </Typography>
        <Typography variant="h5" component="div">
          {ethBlock.number.toLocaleString('en-US')}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Miner
        </Typography>
        <Typography variant="h5" component="div">
        {blockMiner.slice(0,6)}...{blockMiner.slice(-6)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>onSelectBlock(ethBlock)}>See Transactions ({ethBlock.transactions.length})</Button>
      </CardActions>
    </Card>
  );
}

export default BasicBlock;  