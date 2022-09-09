import React from 'react';

import {useTheme} from '@mui/material';
import {styled} from "@mui/material/styles";

const StyledActionBar = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    height: '3rem',
    minHeight: '3rem',
    display: 'flex',
    // marginBottom: '16px',
    borderBottom: "1px solid",
    borderColor: theme.palette.divider,
}));

export const ActionBar = ({children}) => {
    const theme = useTheme();

    return (
        <StyledActionBar theme={theme}>
            {children}
        </StyledActionBar>
    )
}