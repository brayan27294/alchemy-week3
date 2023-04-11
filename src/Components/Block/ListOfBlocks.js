import React, { useEffect, useState } from 'react';
import BasicBlock from './BasicBlock';
import { Grid, Typography } from '@mui/material';
import BlockDetails from './BlockDetails';

const ListOfBlocks = ({blockNumber, alchemy}) => {
    const [blocks, setBlocks] = useState([]);
    const [selectedBlock, setSelectedBlock] = useState(null);
    useEffect(()=>{
        if(blockNumber){
            const fetchLatestBlocks = async() => {
                setSelectedBlock(null);
                const lastBlocks = [];
                for(let i=blockNumber; i >= (blockNumber-11); i--){
                    lastBlocks.push(await alchemy.core.getBlock(i));
                }
                const response = await Promise.all(lastBlocks);
                console.log(response);
                setBlocks(response);
            }
            fetchLatestBlocks();
        }
    },[blockNumber]);

    const getBlockItems = (data) => data.map(block => <Grid item xs={2}><BasicBlock ethBlock={block} onSelectBlock={setSelectedBlock}/></Grid>);

  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h5" component="div">
                Latest Blocks
            </Typography>
        </Grid>
        {getBlockItems(blocks)}
        {selectedBlock && <Grid item xs={12}>
        <Typography variant="h5" component="div">
                Block Details
            </Typography>
            <BlockDetails ethBlock={selectedBlock} />
        </Grid>}
    </Grid>
  );
}

export default ListOfBlocks;