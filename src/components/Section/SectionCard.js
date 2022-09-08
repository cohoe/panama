import React from 'react';
import {Card, CardContent} from '@mui/material';
import {SectionTitle} from "./SectionTitle";
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles({
    cardContentParent: {
        padding: 0,
    },
    mainCardContent: {
        padding: '16px'
    },
});

export const SectionCard = ({title, keyName = title, children}) => {
    const classes = useStyles();

    return (
        <Card key={keyName}>
            <CardContent className={classes.cardContentParent}>
                <SectionTitle title={title}/>
                <div className={classes.mainCardContent}>
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}