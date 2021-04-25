import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    actionBar: {
        backgroundColor: 'white',
        height: '3rem',
        minHeight: '3rem',
        display: 'flex',
        // marginBottom: '16px',
        borderBottom: '1px solid black',
    },
    actionBarIcon: {
        // marginTop: 'auto',
        // marginBottom: 'auto'
    },
    actionBarButton: {

    }
}))

export const ActionBar = ({children}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.actionBar}>
            {children}
        </div>
    )
}