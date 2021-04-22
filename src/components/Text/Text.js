import React from 'react'
import {Container, Typography} from '@material-ui/core'

export const Text = ({text_object}) => {
    return (
        <Container>
            <Typography>{text_object.text}</Typography>
        </Container>
    )
}