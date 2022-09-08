import React from 'react'
import {Container, Typography} from '@mui/material'

export const Component = ({component}) => {
    return (
        <Container>
            <Typography>{component.quantity} {component.unit} {component.display_name}</Typography>
        </Container>
    )
}