import React from "react";
import {ContentContainer} from "./ContentContainer";
import {useTheme} from "@mui/material";
import {styled} from "@mui/material/styles";


// @TODO something with this
const drawerWidth = 240;

const StyledContentParent = styled('div')(({theme}) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    width: `calc(100% - ${drawerWidth}px)`,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
}));

const ToolbarSpacer = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export const ContentParent = () => {
    const theme = useTheme();

    return (
        <StyledContentParent>
            <ToolbarSpacer theme={theme} />
            <ContentContainer/>
        </StyledContentParent>
    )
}