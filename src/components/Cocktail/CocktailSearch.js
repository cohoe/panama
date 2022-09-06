import React, {useState, useEffect} from 'react'
import {CocktailListCard} from "./CocktailListCard";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
// import {Card, CardContent, Container, ListItem, Tabs, Tab, Typography, Button} from '@material-ui/core'
// import {TabPanel} from '@material-ui/lab'
// // import TabPanel from '@material-ui/core/TabsP'
// import {Spec} from '../Spec'

const useStyles = makeStyles({
    root: {
        // https://stackoverflow.com/questions/17295219/overflow-scroll-css-is-not-working-in-the-div
        // height: '100%',
        // overflow: 'scroll'
    },
});


export const CocktailSearch = () => {
    const classes = useStyles();

    const [cocktails, setCocktails] = useState()
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8080/api/v1/cocktails`)
        const json = await response.json()
        setCocktails(json)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const getSpecDescription = (spec) => {
        let description = "";
        spec.components.map((component) => (
            description += component.slug + " "
        ))
        return description
    }

    return (
        <div className={classes.root}>
            SEARCH TIME
        </div>
    )
}