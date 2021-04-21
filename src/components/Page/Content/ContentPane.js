import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {CocktailCustom} from "../../Cocktail";
import {Switch, Route, useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    contentPane: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            flex: 1
        },
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        padding: '16px', // This aligns with grid spacing=2. https://material-ui.com/components/grid/
    }
}))

export const ContentPane = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    let {cocktail_slug, spec_slug} = useParams();
    console.log("LOLZ")
    console.log(cocktail_slug, spec_slug)

    return (
        <div className={classes.contentPane}>
            <Switch>
                <Route path="/cocktails/:cocktail_slug/:spec_slug">
                    <CocktailCustom/>
                </Route>
                <Route path="/settings">
                    <p>Settings!</p>
                </Route>
                <Route path="/">
                    <Typography>Select a cocktail.</Typography>
                </Route>
            </Switch>
        </div>
    )
}
