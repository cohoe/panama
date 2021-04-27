import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {CocktailPane} from "../../Cocktail";
import {Switch, Route, useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    contentPane: {
        [theme.breakpoints.up('sm')]: {
            flex: 1
        },
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        padding: '16px', // This aligns with grid spacing=2. https://material-ui.com/components/grid/
    },
    contentPaneActive: {
        // display: 'flex'
    },
    contentPaneInactive: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    }
}))

export const ContentPane = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    let {cocktail_slug, spec_slug} = useParams();
    console.log("LOLZ")
    console.log(cocktail_slug, spec_slug)

    // @TODO wrap this
    // {/*<div className={classes.paneContainer}>*/}
    // {/*<ActionBar>*/}
    // {/*    <ActionBarButton text={"previous"}/>*/}
    // {/*    <ActionBarButton text={"next"}/>*/}
    // {/*</ActionBar>*/}

    {/*</div>*/}
    return (
        <Switch>
            <Route exact path="/cocktails/:cocktail_slug/:spec_slug">
                <div className={classes.contentPane + ' ' + classes.contentPaneActive}>
                    <CocktailPane/>
                </div>
            </Route>
            <Route exact path="/cocktails">
                <div className={classes.contentPane + ' ' + classes.contentPaneInactive}>
                    <Typography>Select a cocktail.</Typography>
                </div>
            </Route>
            <Route path="/">
                <div className={classes.contentPane}>
                    <Typography>No content configured</Typography>
                </div>
            </Route>
        </Switch>
    )
}
