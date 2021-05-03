import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import classNames from "classnames";

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
        overflowY: 'scroll',
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

export const ScrollPane = ({children, primaryView = false}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const viewClass = primaryView ? classes.scrollPaneActive : classes.scrollPaneInactive

    return (
        <div className={classNames(classes.scrollPane, viewClass)}>
            {children}
            {/*<ActionBar>*/}
            {/*    <ActionBarButton text={"history"}/>*/}
            {/*</ActionBar>*/}
            {/*<div className={classes.scrollPaneInner}>*/}
            {/*    <CocktailList/>*/}
            {/*</div>*/}
        </div>
    )
}