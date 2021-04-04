import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';


import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({}));

export const SideBar = () => {
    const classes = useStyles()
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <></>
    )
}