import React, {useState, useEffect} from 'react'
import {Card, CardContent, Container, Typography} from '@material-ui/core'

export const Component = ({component}) => {
    return (
        <Container>
            <Typography>{component.quantity} {component.unit} {component.slug}</Typography>
        </Container>
    )
}