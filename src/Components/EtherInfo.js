import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ListOfBlocks from './Block/ListOfBlocks';
import BlockDetails from './Block/BlockDetails';
import ListOfTransactions from './Transaction/ListOfTransactions';

const EtherInfo = ({blockNumber, alchemy}) => {
    const [selectedBlock, setSelectedBlock] = useState(null);
    return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <ListOfBlocks blockNumber={blockNumber} alchemy={alchemy} setSelectedBlock={setSelectedBlock}/>
        </Grid>
        {selectedBlock && <Grid item xs={2}><BlockDetails ethBlock={selectedBlock} /></Grid>}
        {selectedBlock && <Grid item xs={10}><ListOfTransactions ethBlock={selectedBlock} alchemy={alchemy}/></Grid>}
    </Grid>
  );
}

export default EtherInfo;