import React from 'react'
import {List, ListItem, Typography} from '@mui/material'
import {Component} from '../Component'
import {Text} from "../Text";
import {SectionCard} from "../Section/SectionCard";
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles({
    title: {
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    description: {
        fontSize: '1rem',
        fontStyle: "italic",
    },
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

export const CocktailSpecCard = ({cocktail_slug, spec}) => {
    const spec_id = `${cocktail_slug}::${spec.slug}`
    const classes = useStyles();

    return (
        <SectionCard title={"Spec"} keyName={spec_id}>
            <Typography variant="h2" className={classes.title} gutterBottom>
                {spec.display_name}
            </Typography>
            <Typography variant="h3" className={classes.description} color="textSecondary">
                {/*@TODO fix this*/}
                {spec.origin.creator}, {spec.origin.venue}, {spec.origin.location}, {spec.origin.year}
                <br/>
                {spec.origin.story}
            </Typography>
            <List>
                {spec.components.map(component => (
                    <ListItem key={component.slug}>
                        <Component component={component}/>
                    </ListItem>
                ))}
            </List>
            <List>
                {spec.instructions.map((instruction, index) => (
                    <ListItem key={index}>
                        <Text text_object={instruction}/>
                    </ListItem>
                ))}
            </List>
            <List>
                {spec.garnish.map(garnish => (
                    <ListItem key={garnish.slug}>
                        <Component component={garnish}/>
                    </ListItem>
                ))}
            </List>
        </SectionCard>
    )
}