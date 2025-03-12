
import * as React from 'react';
import Box from '@mui/material/Box';

const About = ({children}) => {

    return (
        <Box component="About" sx={{ p: 2, border: '1px dashed grey' }}>
            This Box renders as an HTML section element.
            {children}
            <p>lorem ipsum</p>
        </Box>)


};

export default About;

