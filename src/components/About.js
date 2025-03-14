
import * as React from 'react';
import Box from '@mui/material/Box';

const About = ({children}) => {

    return (
        <Box class="lorem" component="About" sx={{ p: 2, border: '1px dashed grey' }}>
            {children}
            <p>lorem ipsum</p>
        </Box>)


};

export default About;

