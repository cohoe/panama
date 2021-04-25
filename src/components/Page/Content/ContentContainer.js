import React from "react";
import {ScrollPane} from "../ScrollPane";
import {ContentPane} from "./ContentPane";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {ActionBar} from "../ActionBar";

const useStyles = makeStyles((theme) => ({
    contentContainer: {
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

export const ContentContainer = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.contentContainer}>
            {/*<div className={classes.paneContainer}>*/}
            {/*    */}
            {/*</div>*/}
            <ScrollPane />
            <div className={classes.paneContainer}>
                <ActionBar/>
                <ContentPane />
            </div>
        </div>
    )
}