import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardContent, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    description: {
        fontSize: '1rem',
        fontStyle: "italic",
    }
});


export const CocktailTitleCard = ({display_name, origin}) => {
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <Typography variant="h1" className={classes.title} gutterBottom>
                    {display_name}
                </Typography>
                <Typography variant="h3" className={classes.description} color="textSecondary">
                    {/*@TODO fix this*/}
                    {origin.creator}, {origin.venue}, {origin.location}, {origin.year}
                    <br/>
                    {origin.story}
                </Typography>
            </CardContent>
        </Card>
    )
}