import React from 'react';
import { Container } from '@mui/material';

const Layout = ({children}) => {
    return <Container maxWidth={false}>
        {children}
    </Container>
}

export default Layout;