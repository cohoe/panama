import React from "react";
import {ListItem, ListItemIcon, ListItemText, List} from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar"
import HomeIcon from "@mui/icons-material/Home"
import {Link} from "react-router-dom";

export const SidebarButtons = () => {
    return (
        <List>
          <Link to={`/`} key="home">
            <ListItem button key="Home">
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
            <Link to={`/cocktails`} key="cocktails">
                <ListItem button key="Cocktails">
                    <ListItemIcon><LocalBarIcon /></ListItemIcon>
                    <ListItemText primary="Cocktails" />
                </ListItem>
            </Link>

        </List>
    )
}