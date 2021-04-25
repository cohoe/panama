import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    actionBar: {
        backgroundColor: 'hotpink',
        minHeight: '2rem',
        display: 'flex',
        // marginBottom: '16px',
    },
    actionBarIcon: {
        // marginTop: 'auto',
        // marginBottom: 'auto'
    },
    actionBarButton: {

    }
}))

export const ActionBar = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.actionBar}>
            <Button className={classes.actionBarButton}><ArrowBackIcon className={classes.actionBarIcon}/></Button>
            <Button className={classes.actionBarButton}><ArrowForwardIcon className={classes.actionBarIcon}/></Button>
        </div>
    )
}