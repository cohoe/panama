import React from 'react';

import {Route, Routes} from "react-router-dom";
import {Typography} from '@mui/material';
import {CocktailList} from "../Cocktail/CocktailList";
import {CocktailSearch} from "../Cocktail/CocktailSearch";
import {ActionBar} from "./ActionBar/ActionBar";
import {ActionBarButton} from "./ActionBar/ActionBarButton";
import {styled} from "@mui/material/styles";


const ScrollPaneInner = styled('div')(() => ({
    overflowY: 'scroll',
}));

const ScrollPaneOuter = (theme) => ({
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
});

const ScrollPaneOuterActive = styled('div')(({theme}) => ({
    ...ScrollPaneOuter(theme),
    // pass
}));
const ScrollPaneOuterInactive = styled('div')(({theme}) => ({
    ...ScrollPaneOuter(theme),
    [theme.breakpoints.down('xs')]: {
        display: 'none'
    },
}));

export const ScrollPane = () => {
    return (
        <Routes>
            <Route exact path="/search/cocktails/" element={
                <ScrollPaneOuterActive>
                    <ActionBar>
                        <ActionBarButton text={"clear"}/>
                    </ActionBar>
                    <ScrollPaneInner>
                        <CocktailSearch/>
                    </ScrollPaneInner>
                </ScrollPaneOuterActive>}/>
            <Route exact path="/cocktails/:cocktail_slug/:spec_slug" element={
                <ScrollPaneOuterInactive>
                    <ActionBar>
                        <ActionBarButton text={"history"}/>
                        <ActionBarButton text={"search"} path={"/search/cocktails"}/>
                    </ActionBar>
                    <ScrollPaneInner>
                        <CocktailList/>
                    </ScrollPaneInner>
                </ScrollPaneOuterInactive>}/>
            <Route exact path="/cocktails/" element={
                <ScrollPaneOuterActive>
                    <ActionBar>
                        <ActionBarButton text={"history"}/>
                        <ActionBarButton text={"search"} path={"/search/cocktails"}/>
                    </ActionBar>
                    <ScrollPaneInner>
                        <CocktailList/>
                    </ScrollPaneInner>
                </ScrollPaneOuterActive>}/>
            <Route path="/" element={
                <ScrollPaneOuterActive>
                    <ActionBar></ActionBar>
                    <ScrollPaneInner>
                        <Typography>Hork Tork</Typography>
                    </ScrollPaneInner>
                </ScrollPaneOuterActive>}/>
        </Routes>
    )
}
