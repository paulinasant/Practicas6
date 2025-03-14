import {Container, Typography} from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";

const Layout = ({children}) => {


    return (
        <Box className ="bux" component="Container" sx={{ p: 2, border: '1px dashed grey' }}>
            <Navbar />
            {children}
            <Box className="footer">
                <center>Todos los derechos reservados</center> </Box>
        </Box>)
};

export default  Layout;