import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom'
// Material UI
import { Avatar, AppBar, Box, Toolbar, IconButton, Typography, Button, MenuItem } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// Components
import ConnectCard  from './ConnectCard';


// const 

const  NavBar = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color={"secondary"}
                    >
                    <MenuRoundedIcon />
                </IconButton>
                <Typography variant="h2" component="h4" sx={{ flexGrow: 1 }}>
                    Lee R. Roberts
                </Typography>
                <Button variant="contained" color="secondary" onClick={() => <ConnectCard />}>Contact</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;