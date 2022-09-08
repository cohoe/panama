import React from 'react'
import {makeStyles} from '@mui/styles';
import {Card, CardContent, Typography} from '@mui/material';

const useStyles = makeStyles({
    root: {},
    title: {
        fontSize: 14,
    },
});

export const CocktailListCard = ({cocktail_display_name, spec_display_name, description}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {cocktail_display_name} ({spec_display_name})
                </Typography>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}