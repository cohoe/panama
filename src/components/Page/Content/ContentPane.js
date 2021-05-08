import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {useParams, useHistory} from "react-router-dom";
import classNames from "classnames";
import {ActionBar} from "../ActionBar/ActionBar";
import {ActionBarButton} from "../ActionBar/ActionBarButton";

const useStyles = makeStyles((theme) => ({
    contentPane: {
        [theme.breakpoints.up('sm')]: {
            flex: 1
        },
        display: 'flex',
        flexDirection: 'column',
        // overflowY: 'scroll',
    },
    contentPaneActive: {
        // display: 'flex'
    },
    contentPaneInactive: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    contentPaneInner: {
        overflowY: 'scroll',
        flex: 1,
    }
}))

export const ContentPane = ({children, primaryView = false}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const history = useHistory();

    let {cocktail_slug, spec_slug} = useParams();
    console.log("LOLZ")
    console.log(cocktail_slug, spec_slug)

    const viewClass = primaryView ? classes.contentPaneActive : classes.contentPaneInactive

    return (
        <div className={classNames(classes.contentPane, viewClass)}>
            <ActionBar>
                <ActionBarButton text={"back"} onClick={() => {
                    history.push('/cocktails')
                }}/>
                <ActionBarButton text={"previous"}/>
                <ActionBarButton text={"next"}/>
            </ActionBar>
            <div className={classes.contentPaneInner}>
                {children}
            </div>
        </div>
    )
}
