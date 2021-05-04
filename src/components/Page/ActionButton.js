import React from "react";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import Fab from "@material-ui/core/Fab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Fab className={classes.fab} color="primary" aria-label="menu" onClick={handleClick}>
                <MenuIcon/>
            </Fab>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
                <MenuItem onClick={handleClose}>Add Note</MenuItem>
            </Menu>
        </>
    )
}