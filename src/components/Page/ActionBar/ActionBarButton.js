import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

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