import React from "react";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            // This is to fix an issue with desktops where it doesn't line up right.
            marginRight: theme.spacing(2),
        },
    },
}))

export const ActionButton = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <Fab className={classes.fab} color="primary" aria-label="menu">
            <MenuIcon />
        </Fab>
    )
}