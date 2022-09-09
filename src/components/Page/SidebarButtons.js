import React from "react";
import {ListItem, ListItemIcon, ListItemText, List} from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar"
import HomeIcon from "@mui/icons-material/Home"
import {Link} from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';

export const SidebarButtons = ({open}) => {
    return (
        <List>
            <Link to={`/`} key="home">
                <ListItem key={"home"} disablePadding sx={{display: 'block'}}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Home"} sx={{opacity: open ? 1 : 0}}/>
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to={`/cocktails`} key={"cocktails"}>
                <ListItem key={"cocktails"} disablePadding sx={{display: 'block'}}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <LocalBarIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Cocktails"} sx={{opacity: open ? 1 : 0}}/>
                    </ListItemButton>
                </ListItem>
            </Link>
        </List>
    )
}