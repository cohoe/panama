import React from 'react';

import {useTheme, Button} from '@mui/material';
import {Link} from "react-router-dom";
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    actionBarIcon: {
        // marginTop: 'auto',
        // marginBottom: 'auto'
    },
    actionBarButton: {
        height: '100%',
    }
}))

export const ActionBarButton = ({text, path="#"}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
      <Link to={path} key={text} >
        <Button className={classes.actionBarButton}>{text}</Button>
      </Link>
    )
}