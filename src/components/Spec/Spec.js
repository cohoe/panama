import React, {useState, useEffect} from 'react'
import {Card, CardContent, Container, List, ListItem, Typography} from '@material-ui/core'
import {Component} from '../Component'
import {Text} from "../Text";
import {makeStyles} from "@material-ui/core/styles";

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

export const Spec = ({cocktail_slug, spec}) => {
    const spec_id = `${cocktail_slug}::${spec.slug}`
    const classes = useStyles();

    return (
        <Card key={spec_id}>
            <CardContent>
                <Typography variant="h1" className={classes.title} gutterBottom>
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
                    {spec.instructions.map(instruction => (
                        <ListItem>
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
            </CardContent>
        </Card>
    )
}