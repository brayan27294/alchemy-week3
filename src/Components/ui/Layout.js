import React from 'react';
import { Grid } from '@mui/material';

const Layout = ({children}) => {
    return (
        <Grid container padding={4}>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>);
}

export default Layout;