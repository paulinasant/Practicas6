
import * as React from 'react';
import Box from '@mui/material/Box';

const Home = ({children}) => {

    return (
        <Box component="Home" sx={{ p: 2, border: '1px dashed grey' }}>
            This Box renders as an HTML section element.
            {children}
            <div> <h1>Página Principal</h1></div>
        </Box>)
};

export default Home;