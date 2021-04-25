import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    actionBarIcon: {
        // marginTop: 'auto',
        // marginBottom: 'auto'
    },
    actionBarButton: {

    }
}))

export const ActionBarButton = ({text}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Button className={classes.actionBarButton}>{text}</Button>
    )
}