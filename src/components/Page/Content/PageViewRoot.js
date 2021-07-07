import React from "react";
import {PageViewContainer} from "./PageViewContainer";
import {makeStyles, useTheme} from "@material-ui/core/styles";

// @TODO something with this
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBarSpacer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    pageViewRoot: {
        flexGrow: 1,
        // padding: theme.spacing(3),
        width: `calc(100% - ${drawerWidth}px)`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    },
}))

export const PageViewRoot = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.pageViewRoot}>
            <div className={classes.appBarSpacer}/>
            <PageViewContainer/>
        </div>
    )
}