import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {CocktailList} from "../Cocktail/CocktailList";

const useStyles = makeStyles((theme) => ({
    scrollBar: {
        [theme.breakpoints.up('md')]: {
            width: '340px',
        },
        [theme.breakpoints.only('sm')]: {
            flex: 1,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        overflowY: 'scroll',
    },
}))

export const ScrollPane = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.scrollBar}>
            <CocktailList />
        </div>
    )
}