import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

const Sidebar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };

    return (
        <>
            <IconButton onClick={() => toggleDrawer(true)} sx={{ position: "absolute", top: 10, left: 10 }}>
                <MenuIcon />
            </IconButton>

            <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
                <Box className="sidebar">
                    <List sx={{ width: 240 }} onClick={() => toggleDrawer(false)}>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/inicio">
                                <ListItemText primary="Inicio" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/sobre-nosotros">
                                <ListItemText primary="Sobre Nosotros" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/contacto">
                                <ListItemText primary="Contacto" />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Sidebar;


