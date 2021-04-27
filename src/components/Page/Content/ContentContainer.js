import React from "react";
import {ScrollPane} from "../ScrollPane";
import {ContentPane} from "./ContentPane";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {ActionBar} from "../ActionBar/ActionBar";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {ActionBarButton} from "../ActionBar/ActionBarButton";

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

    // @TODO refactor this to get the stuff into ContentPane
    // @TODO fix scrolling
    return (
        <div className={classes.contentContainer}>
            <ScrollPane />
            <div className={classes.paneContainer}>
                {/*<ActionBar>*/}
                {/*    <ActionBarButton text={"previous"}/>*/}
                {/*    <ActionBarButton text={"next"}/>*/}
                {/*</ActionBar>*/}
                <ContentPane />
            </div>
        </div>
    )
}