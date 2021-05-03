import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import classNames from "classnames";
import {ActionBar} from "./ActionBar/ActionBar";
import {ActionBarButton} from "./ActionBar/ActionBarButton";
import {SearchBox} from "./ActionBar/SearchBox";

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
        flex: 1,
    }
}))

export const ScrollPane = ({children, primaryView = false}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const viewClass = primaryView ? classes.scrollPaneActive : classes.scrollPaneInactive

    return (
        <div className={classNames(classes.scrollPane, viewClass)}>
            <ActionBar>
                {/*<ActionBarButton text={"history"}/>*/}
                <SearchBox />
            </ActionBar>
            <div className={classes.scrollPaneInner}>
                {children}
            </div>
        </div>
    )
}