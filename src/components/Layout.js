import {Container} from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";

const Layout = ({children}) => {


    return (
        <Box component="Container" sx={{ p: 2, border: '1px dashed grey' }}>
            This Box renders as an HTML section element.
            {children}
            <Box className="footer"></Box>
        </Box>)
};

export default  Layout;