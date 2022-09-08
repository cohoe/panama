import React from "react";
import {ScrollPane} from "../ScrollPane";
import {ContentPane} from "./ContentPane";
import {ActionBar} from "../ActionBar/ActionBar";
import {useTheme} from "@mui/material";
import {ActionBarButton} from "../ActionBar/ActionBarButton";
import {makeStyles} from '@mui/styles';


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
    return (
        <div className={classes.contentContainer}>
            <ScrollPane />
            <div className={classes.paneContainer}>
                <ActionBar>
                    <ActionBarButton text={"previous"}/>
                    <ActionBarButton text={"next"}/>
                </ActionBar>
                <ContentPane />
            </div>
        </div>
    )
}