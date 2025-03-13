
import * as React from 'react';
import Box from '@mui/material/Box';
import Carousel from "./Carousel";

const Home = ({children}) => {

    return (
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            {children}
            <h1>Página Principal</h1>
            {children}
            <Carousel/>
        </Box>
);

};

export default Home;