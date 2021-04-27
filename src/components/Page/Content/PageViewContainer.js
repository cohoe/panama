import React from "react";
import {ScrollPane} from "../ScrollPane";
import {ContentPane} from "./ContentPane";
import {makeStyles, useTheme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    pageViewContainer: {
        display: 'flex',
        overflow: 'hidden',
        flex: 1
    },
    paneContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    }
}))

export const PageViewContainer = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.pageViewContainer}>
            <ScrollPane />
            <ContentPane />
        </div>
    )
}