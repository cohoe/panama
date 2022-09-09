import React from 'react'
import {Card, CardContent} from "@mui/material";
import {styled} from "@mui/material/styles";


const Title = styled('h1')(({theme}) => ({
    fontSize: '1rem',
    fontWeight: 'bold',
}));

const Description = styled('span')(({theme}) => ({
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    fontStyle: "italic",
}));


export const CocktailTitleCard = ({display_name, origin}) => {
    return (
        <Card>
            <CardContent>
                <Title gutterBottom>
                    {display_name}
                </Title>
                <Description>
                    {/*@TODO fix this*/}
                    {origin.creator}, {origin.venue}, {origin.location}, {origin.year}
                    <br/>
                    {origin.story}
                </Description>
            </CardContent>
        </Card>
    )
}