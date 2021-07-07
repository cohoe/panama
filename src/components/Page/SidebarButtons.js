import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import {Link} from "react-router-dom";

export const SidebarButtons = () => {
    return (
        <List>
            <ListItem button component={Link} to={`/cocktails`} key={'Cocktails'}>
                <ListItemIcon><LocalDrinkIcon/></ListItemIcon>
                <ListItemText primary={'Cocktails'}/>
            </ListItem>
            <ListItem button component={Link} to={`/ingredients`} key={'Ingredients'}>
                <ListItemIcon><FastfoodIcon/></ListItemIcon>
                <ListItemText primary={'Ingredients'}/>
            </ListItem>
        </List>
    )
}