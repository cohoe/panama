import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardContent, Typography} from '@material-ui/core'
import {SectionCard} from "../Section/SectionCard";
import {NotesList} from "../Text/NotesList";


const useStyles = makeStyles({
    title: {
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    // description: {
    //     fontSize: '1rem',
    //     fontStyle: "italic",
    // }
});

export const CocktailNotesCard = ({cocktail_name, cocktail_notes, spec_name, spec_notes}) => {
    const classes = useStyles();

    return (
        <SectionCard title={"Notes"}>
            <Card>
                <CardContent>
                    <Typography variant="h1" className={classes.title} gutterBottom>For {cocktail_name}</Typography>
                    <NotesList notes={cocktail_notes} />
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="h1" className={classes.title} gutterBottom>For {spec_name}</Typography>
                    <NotesList notes={spec_notes} />
                </CardContent>
            </Card>
        </SectionCard>
    )
}