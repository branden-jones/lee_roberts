import React, { useState } from "react";

// Material UI
import { AppBar, Box, Toolbar, Button, Typography } from "@mui/material";
import myTheme from "../Themes/mainTheme";
import { ThemeProvider } from "@mui/material/styles"; 

// Icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// Components
import SideBar from "./SideBar";


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

    // const list = (anchor) => {
    //     <Box
    //         sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    //         // role='presentation'
    //         onClick={() => toggleDrawer(anchor, false)} //this is where i will put the redirect
    //         onKeyDown={() => toggleDrawer(anchor, false)}
    //     >
            
    //     </Box>
    // }
    return (
        <>
            <ThemeProvider theme={myTheme}>
                <Box sx={{ background: 'secondary', color: 'primary', flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Button
                                color={"secondary"}
                                onClick={toggleDrawer('left', true)}
                                edge='start'
                            >{<MenuRoundedIcon />}
                            </Button>
                            <SideBar openStatus={drawerState} />
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
            </ThemeProvider>
        </>
    );
};