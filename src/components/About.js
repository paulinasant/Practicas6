
import * as React from 'react';
import Box from '@mui/material/Box';

const About = ({children}) => {

    return (
        <Box class="lorem" component="About" sx={{ p: 2, border: '1px dashed grey' }}>
            {children}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis

                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.</p>
        </Box>)


};

export default About;

