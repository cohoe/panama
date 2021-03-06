import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import {CocktailList} from "../Cocktail/CocktailList";
import {Route, Switch} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {ActionBar} from "./ActionBar/ActionBar";
import {ActionBarButton} from "./ActionBar/ActionBarButton";

const useStyles = makeStyles((theme) => ({
    scrollPane: {
        [theme.breakpoints.up('md')]: {
            width: '340px',
        },
        [theme.breakpoints.only('sm')]: {
            flex: 1, // @TODO width 50%?
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        // overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #000'
    },
    scrollPaneActive: {
        // display: 'flex'
    },
    scrollPaneInactive: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    scrollPaneInner: {
        overflowY: 'scroll',
    }
}))

export const ScrollPane = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Switch>
            <Route exact path="/cocktails/:cocktail_slug/:spec_slug">
                <div className={classes.scrollPane + ' ' + classes.scrollPaneInactive}>
                    <ActionBar>
                        <ActionBarButton text={"history"}/>
                    </ActionBar>
                    <div className={classes.scrollPaneInner}>
                        <CocktailList/>
                    </div>
                </div>
            </Route>
            <Route exact path="/cocktails/">
                <div className={classes.scrollPane + ' ' + classes.scrollPaneActive}>
                    <CocktailList/>
                </div>
            </Route>
            <Route path="/">
                <div className={classes.scrollPane}>
                    <Typography>Hork Tork</Typography>
                </div>
            </Route>
        </Switch>
    )
}