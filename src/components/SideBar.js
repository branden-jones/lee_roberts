import React, { useState } from "react";
import { Link } from "react-router-dom";

// Material UI
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Drawer from "@mui/material/Drawer";

// Icons
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function SideBar(props) {
    
    const { drawerState } = props.openStatus;
    console.log(`props`,drawerState)
    const linkNames = ['Home', 'About', 'Connect']

    const linkComponents = [<HomeIcon />, <InfoIcon />, <ConnectWithoutContactIcon />]

    return (
        <>
            <Drawer
                open={!!drawerState}
                direction={'left'}
                // onClose={() => setDrawerState({ left: false })}
                
            >
                <List>
                    {linkNames.map((el,idx) => (
                        <ListItem key={idx} disablePadding>
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
        </>
    )
}
