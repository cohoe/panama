import React, {useState, useEffect} from 'react'
import {Card, CardContent, Container, List, ListItem} from '@material-ui/core'
import {Component} from '../Component'
import {Text} from "../Text";

export const Spec = ({cocktail_slug, spec}) => {
    const spec_id = `${cocktail_slug}::${spec.slug}`

    return (
        <>
            <Card key={spec_id}>
                <CardContent>
                    <p>{spec.display_name}</p>
                    <List>
                        {spec.components.map(component => (
                            <ListItem key={component.slug}>
                                <Component component={component} />
                            </ListItem>
                        ))}
                    </List>
                    <List>
                        {spec.instructions.map(instruction => (
                            <ListItem>
                                <Text text_object={instruction} />
                            </ListItem>
                        ))}
                    </List>
                    <List>
                        {spec.garnish.map(garnish => (
                            <ListItem key={garnish.slug}>
                                <Component component={garnish} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </>
    )
}