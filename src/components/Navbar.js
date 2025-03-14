import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import Box from '@mui/material/Box';
import Sidebar from "./Sidebar";

function MenuIcon() {
    return null;
}

const  Navbar =() => {
    return (
        <Box  className="nav" sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Sidebar/>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <Button color="inherit">Acceso</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default Navbar;