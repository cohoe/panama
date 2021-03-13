import React, {useState, useEffect} from 'react'
import {Card, CardContent, Container, List, ListItem, Typography} from '@material-ui/core'
import {Component} from '../Component'

export const Text = ({text_object}) => {
    return (
        <Container>
            <Typography>{text_object.text}</Typography>
        </Container>
    )
}