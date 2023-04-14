import React, { useCallback, useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

const SearchBlockForm = ({alchemy, setBlockNumber}) => {
  const [customBlockNumber, setCustomBlockNumber] = useState('');
  

  const reloadData = useCallback(async() => {
      setBlockNumber(await alchemy.core.getBlockNumber());
  },[alchemy.core, setBlockNumber]);

  const handleCustomBlock = (e) => {
    e.preventDefault();
    setBlockNumber(Number(customBlockNumber));
};

  useEffect(()=>{
    reloadData();
  },[reloadData]);

  return (
    <Grid container marginBottom={2}>
        <Grid item xs={10}>
            <form onSubmit={handleCustomBlock}>
                <TextField
                    label='Block Number'
                    value={customBlockNumber}
                    variant='standard'
                    onChange={(event) => {
                    setCustomBlockNumber(event.target.value);
                    }}/>
                <Button type='submit' variant='outlined'>Load From Block</Button>
            </form>
        </Grid>
        <Button onClick={reloadData} variant='contained'>Load From Latest Block</Button>
    </Grid>
  );
};

export default SearchBlockForm;