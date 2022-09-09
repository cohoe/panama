import React from 'react';

import {useTheme, Typography} from '@mui/material';
import {CocktailPane} from "../../Cocktail";
import {Route, Routes, useParams} from "react-router-dom";
import {styled} from "@mui/material/styles";


const ContentPaneBox = styled('div')(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        flex: 1
    },
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    padding: '16px', // This aligns with grid spacing=2. https://material-ui.com/components/grid/
}));

const activeMixin = (theme) => ({});

const inactiveMixin = (theme) => ({
    [theme.breakpoints.down('xs')]: {
        display: 'none'
    },
});

export const ContentPane = () => {
    const theme = useTheme();

    let {cocktail_slug, spec_slug} = useParams();
    console.log("LOLZ")
    console.log(cocktail_slug, spec_slug)

    return (
        <Routes>
            <Route exact path="/cocktails/:cocktail_slug/:spec_slug" element={
                <ContentPaneBox sx={{...activeMixin(theme)}}>
                    <CocktailPane/>
                </ContentPaneBox>}/>
            <Route exact path="/cocktails" element={
                <ContentPaneBox sx={{...inactiveMixin(theme)}}>
                    <Typography>Select a cocktail.</Typography>
                </ContentPaneBox>}/>
            <Route path="/" element={
                <ContentPaneBox sx={{...inactiveMixin(theme)}}>
                    <Typography>No content configured</Typography>
                </ContentPaneBox>}/>}/>
        </Routes>
    )
}
