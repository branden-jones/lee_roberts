import React, { useState } from "react";
import { Avatar, AppBar, Box, Toolbar, IconButton, Typography, Button, MenuItem } from "@mui/material";

// const 

const  NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuItem />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
            </Box>
    )
}

export default NavBar;