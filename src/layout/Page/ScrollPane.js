import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {CocktailList} from "../../components/Cocktail/CocktailList";

const useStyles = makeStyles((theme) => ({
    scrollBar: {
        width: '340px',
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