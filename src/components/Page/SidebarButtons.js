import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import HomeIcon from "@material-ui/icons/Home";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
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