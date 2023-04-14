import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

const SearchAccountForm = ({setAccount}) => {
  const [account, setAccountHandler] = useState('');

  const handleCustomBlock = (e) => {
    e.preventDefault();
    setAccount(account);
};

  return (
    <Grid container marginBottom={2}>
        <Grid item xs={10}>
            <form onSubmit={handleCustomBlock}>
                <TextField
                    label='Account Address'
                    value={account}
                    variant='standard'
                    onChange={(event) => {
                      setAccountHandler(event.target.value);
                    }}/>
                <Button type='submit' variant='outlined'>Search Balance</Button>
            </form>
        </Grid>
    </Grid>
  );
};

export default SearchAccountForm;