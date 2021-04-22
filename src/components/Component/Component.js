import React from 'react'
import {Container, Typography} from '@material-ui/core'

export const Component = ({component}) => {
    return (
        <Container>
            <Typography>{component.quantity} {component.unit} {component.display_name}</Typography>
        </Container>
    )
}