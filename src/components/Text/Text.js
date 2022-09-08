import React from 'react'
import {Container, Typography} from '@mui/material'

export const Text = ({text_object}) => {
    return (
        <Container>
            <Typography>{text_object.text}</Typography>
        </Container>
    )
}