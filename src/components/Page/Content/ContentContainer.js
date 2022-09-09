import React from "react";
import {ScrollPane} from "../ScrollPane";
import {ContentPane} from "./ContentPane";
import {ActionBar} from "../ActionBar/ActionBar";
import {useTheme} from "@mui/material";
import {ActionBarButton} from "../ActionBar/ActionBarButton";
import {styled} from "@mui/material/styles";


const StyledContentContainer = styled('div')(({theme}) => ({
    display: 'flex',
    overflow: 'hidden',
    flex: 1,
    background: 'yellow'
}));

const ContentContainerInner = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    background: 'cyan'
}));

export const ContentContainer = () => {
    const theme = useTheme();

    // @TODO refactor this to get the stuff into ContentPane
    return (
        <StyledContentContainer>
            <ScrollPane />
            <ContentContainerInner>
                <ActionBar>
                    <ActionBarButton text={"previous"}/>
                    <ActionBarButton text={"next"}/>
                </ActionBar>
                <ContentPane />
            </ContentContainerInner>
        </StyledContentContainer>
    )
}