import React from 'react';

import {useTheme} from '@mui/material';
import {makeStyles} from '@mui/styles';


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