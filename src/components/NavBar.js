import React, { useState } from "react";
import { Link } from 'react-router-dom'

// Material UI
import { AppBar, Box, Toolbar, IconButton, Typography, Button, MenuItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import myTheme from "./pages/Themes/mainTheme";

// Icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

// Components
import ConnectCard  from './ConnectCard';


export default function NavBar(){
    const [drawerState, setDrawerState] = useState({
        top: false,
        right: false,
        bottom: false,
        left: false
    });

    const toggleDrawer = (anchor, openStatus) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerState({ ...drawerState, [anchor]: openStatus })
    }

    const linkNames = ['Home', 'About', 'Connect']

    const linkComponents = [<HomeIcon />, <InfoIcon />, <ConnectWithoutContactIcon />]

    const list = (anchor) => {
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            // role='presentation'
            onClick={() => toggleDrawer(anchor, false)} //this is where i will put the redirect
            onKeyDown={() => toggleDrawer(anchor, false)}
        >
            
        </Box>
    }
    return (
        <>
            <Box sx={{ background: 'secondary', color: 'primary', flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button
                            color={"secondary"}
                            onClick={toggleDrawer('left', true)}
                            edge='start'
                        >{<MenuRoundedIcon />}
                        </Button>
                        <Drawer
                            open={drawerState.left}
                            direction={'left'}
                            onClose={() => setDrawerState({ left: false })}
                            
                        >
                            <List sx={{ background: 'secondary', color: 'primary', flexGrow: 1 }}>
                                {linkNames.map((el,idx) => (
                                    <ListItem key={idx} disablePadding sx={{ background: 'secondary', color: 'primary', flexGrow: 1 }}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {linkComponents[idx]}
                                            </ListItemIcon>
                                            <ListItemText primary={el} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                        <Typography
                            variant="h2"
                            component="h4"
                            sx={{ flexGrow: 1 }}
                            align={'center'}
                        >
                            Lee R. Roberts
                        </Typography>
                    </Toolbar>
                    
                </AppBar>
            </Box>
        </>
    );
};