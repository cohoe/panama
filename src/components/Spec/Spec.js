import React, {useState, useEffect} from 'react'
import {Card, CardContent, Container, List, ListItem} from '@material-ui/core'
import {Component} from '../Component'

export const Spec = ({cocktail_slug, spec}) => {
    const spec_id = `${cocktail_slug}::${spec.slug}`

    return (
        <Container>
            <Card key={spec_id}>
                <CardContent>
                    <p>{spec.display_name}</p>
                    <List>
                        {spec.components.map(component => (
                            <ListItem>
                                <Component component={component} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Container>
    )
}