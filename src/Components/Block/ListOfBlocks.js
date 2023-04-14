import React, { useEffect, useState } from 'react';
import BasicBlock from './BasicBlock';
import { Grid, Typography } from '@mui/material';

const ListOfBlocks = ({blockNumber, alchemy, setSelectedBlock}) => {
    const [blocks, setBlocks] = useState([]);
    useEffect(()=>{
        if(blockNumber){
            const fetchLatestBlocks = async() => {
                setSelectedBlock(null);
                const lastBlocks = [];
                for(let i=blockNumber; i >= (blockNumber-11); i--){
                    lastBlocks.push(await alchemy.core.getBlock(i));
                }
                const response = await Promise.all(lastBlocks);
                setBlocks(response);
            }
            fetchLatestBlocks();
        }
    },[alchemy.core, blockNumber, setSelectedBlock]);

    const getBlockItems = (data) => data.map((block, index) => <Grid item xs={2} key={`grid_bblock_${index}`}><BasicBlock ethBlock={block} onSelectBlock={setSelectedBlock}/></Grid>);

  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h5" component="div">
                Latest Blocks
            </Typography>
        </Grid>
        {getBlockItems(blocks)}
    </Grid>
  );
}

export default ListOfBlocks;