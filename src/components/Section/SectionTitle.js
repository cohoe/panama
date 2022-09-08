import React from 'react'
import {Typography} from '@mui/material'
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutline"
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles({
    cardLabel: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: 'auto',
        marginTop: 'auto'
    },
    cardTitleContainer: {
        display: 'flex',
        width: '100%',
        paddingLeft: '16px',
        paddingRight: '16px',
        borderBottom: '1px solid black',
        minHeight: '2rem',
        background: 'deepskyblue'
    },
    helpIcon: {
        marginLeft: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto'
    }
});

export const SectionTitle = ({title}) => {
    const classes = useStyles();

    return (
        <div className={classes.cardTitleContainer}>
            <Typography className={classes.cardLabel}>{title}</Typography>
            <HelpOutlineOutlinedIcon className={classes.helpIcon}/>
        </div>
    )
}