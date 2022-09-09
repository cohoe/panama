import React from 'react'
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutline"
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

const CardLabel = styled(Typography)(() => ({
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: 'auto',
    marginTop: 'auto'
}));

const CardTitleContainer = styled('div')(({theme}) => ({
    display: 'flex',
    width: '100%',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
    minHeight: '2rem',
    background: 'deepskyblue'
}));

const CardHelpIcon = styled(HelpOutlineOutlinedIcon)(() => ({
    marginLeft: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto'
}));

export const SectionTitle = ({title}) => {
    return (
        <CardTitleContainer>
            <CardLabel>{title}</CardLabel>
            <CardHelpIcon/>
        </CardTitleContainer>
    )
}