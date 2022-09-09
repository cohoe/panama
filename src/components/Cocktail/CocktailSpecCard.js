import React from 'react'
import {List, ListItem} from '@mui/material'
import {Component} from '../Component'
import {Text} from "../Text";
import {SectionCard} from "../Section/SectionCard";
import {styled} from "@mui/material/styles";


const Title = styled('h2')(({theme}) => ({
    fontSize: '1rem', fontWeight: 'bold',
}));

const Description = styled('span')(({theme}) => ({
    color: theme.palette.text.secondary, fontSize: '1rem', fontStyle: "italic",
}));

export const CocktailSpecCard = ({cocktail_slug, spec}) => {
    const spec_id = `${cocktail_slug}::${spec.slug}`

    return (<SectionCard title={"Spec"} keyName={spec_id}>
        <Title gutterBottom>
            {spec.display_name}
        </Title>
        <Description>
            {/*@TODO fix this*/}
            {spec.origin.creator}, {spec.origin.venue}, {spec.origin.location}, {spec.origin.year}
            <br/>
            {spec.origin.story}
        </Description>
        <List>
            {spec.components.map(component => (<ListItem key={component.slug}>
                <Component component={component}/>
            </ListItem>))}
        </List>
        <List>
            {spec.instructions.map((instruction, index) => (<ListItem key={index}>
                <Text text_object={instruction}/>
            </ListItem>))}
        </List>
        <List>
            {spec.garnish.map(garnish => (<ListItem key={garnish.slug}>
                <Component component={garnish}/>
            </ListItem>))}
        </List>
    </SectionCard>)
}