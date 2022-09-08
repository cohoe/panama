import React, {useState, useEffect} from 'react'
import {makeStyles} from '@mui/styles';

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