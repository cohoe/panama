import React from 'react';

import {Route, Routes} from "react-router-dom";
import {useTheme, Typography} from '@mui/material';
import {CocktailList} from "../Cocktail/CocktailList";
import {CocktailSearch} from "../Cocktail/CocktailSearch";
import {ActionBar} from "./ActionBar/ActionBar";
import {ActionBarButton} from "./ActionBar/ActionBarButton";
import {makeStyles} from '@mui/styles';


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
        <Routes>
            <Route exact path="/search/cocktails/" element={
                <div className={classes.scrollPane + ' ' + classes.scrollPaneActive}>
                    <ActionBar>
                        <ActionBarButton text={"clear"}/>
                    </ActionBar>
                    <div className={classes.scrollPaneInner}>
                        <CocktailSearch/>
                    </div>
                </div>}/>
            <Route exact path="/cocktails/:cocktail_slug/:spec_slug" element={
                <div className={classes.scrollPane + ' ' + classes.scrollPaneInactive}>
                    <ActionBar>
                        <ActionBarButton text={"history"}/>
                        <ActionBarButton text={"search"} path={"/search/cocktails"}/>
                    </ActionBar>
                    <div className={classes.scrollPaneInner}>
                        <CocktailList/>
                    </div>
                </div>}/>
            <Route exact path="/cocktails/" element={
                <div className={classes.scrollPane + ' ' + classes.scrollPaneActive}>
                    <ActionBar>
                        <ActionBarButton text={"history"}/>
                        <ActionBarButton text={"search"} path={"/search/cocktails"}/>
                    </ActionBar>
                    <div className={classes.scrollPaneInner}>
                        <CocktailList/>
                    </div>
                </div>}/>
            <Route path="/" element={
                <div className={classes.scrollPane}>
                    <Typography>Hork Tork</Typography>
                </div>}/>
        </Routes>
    )
}