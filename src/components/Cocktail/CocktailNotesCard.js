import React from 'react'
import {Card, CardContent, Typography} from "@mui/material";
import {SectionCard} from "../Section/SectionCard";
import {NotesList} from "../Text/NotesList";
import {styled} from "@mui/material/styles";

const Title = styled('h1')(({theme}) => ({
    fontSize: '1rem',
    fontWeight: 'bold',
}));

export const CocktailNotesCard = ({cocktail_name, cocktail_notes, spec_name, spec_notes}) => {
    return (
        <SectionCard title={"Notes"}>
            <Card>
                <CardContent>
                    <Title gutterBottom>For {cocktail_name}</Title>
                    <NotesList notes={cocktail_notes}/>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Title gutterBottom>For {spec_name}</Title>
                    <NotesList notes={spec_notes}/>
                </CardContent>
            </Card>
        </SectionCard>
    )
}