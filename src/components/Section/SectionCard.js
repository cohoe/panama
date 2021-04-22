import React from 'react';
import {Card, CardContent} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {SectionTitle} from "./SectionTitle";

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