import React, {useState, useEffect} from 'react'
import {Card, CardContent, Container, ListItem, Tabs, Tab, Typography, Button} from '@material-ui/core'
import {TabPanel} from '@material-ui/lab'
// import TabPanel from '@material-ui/core/TabsP'
import {Spec} from '../Spec'
import {Text} from "../Text";
import Carousel from 'react-material-ui-carousel'
import {useParams} from 'react-router-dom'
import {Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {CocktailTitleCard} from "./CocktailTitleCard";

const useStyles = makeStyles((theme) => ({
    cocktailPaper: {
        backgroundColor: 'pink',
    }
}))

export const CocktailCustom = () => {
    let {cocktail_slug, spec_slug} = useParams();
    const theme = useTheme();
    const classes = useStyles(theme);

    const [cocktail, setCocktail] = useState()
    const [loading, setLoading] = useState(true)
    const [specIndex, setSpecIndex] = useState(0)

    const fetchData = async (cocktail_slug) => {
        const response = await fetch(`http://localhost:8080/api/v1/cocktails/${cocktail_slug}`)
        const json = await response.json()
        setCocktail(json)
        // lookupSpecIndex(spec_slug)
        setLoading(false)
    }

    const lookupSpecIndex = (spec_slug) => {
        console.log("Looking up something")
        // Convert this to a map!
        for (let i = 0; i < cocktail.specs.length; i++) {
            if (cocktail.specs[i].slug === spec_slug) {
                return i
            }
        }
        return 0
    }

    useEffect(() => {
        fetchData(cocktail_slug)
    }, [cocktail_slug])

    // https://stackoverflow.com/questions/53898810/executing-async-code-on-update-of-state-with-react-hooks
    // Is this kosher?
    useEffect(() => {
        console.log("WHAHAHAHAHHAA")
        if (cocktail) {
            setSpecIndex(lookupSpecIndex(spec_slug))
        }
    }, [cocktail])

    const getPreviousArrayIndex = (index) => {
        if (index === 0) {
            return 0
        } else {
            return index - 1
        }
    }

    const getNextArrayIndex = (index) => {
        if (index === cocktail.specs.length - 1) {
            return index
        }
        return index + 1
    }

    const getNextDisabled = () => {
        return specIndex === cocktail.specs.length - 1
    }

    const getPreviousDisabled = () => {
        return specIndex === 0
    }

    // Could do a different return() here for loading

    // @TODO fix grid shit
    return (
        <Paper className={classes.cocktailPaper}>
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CocktailTitleCard display_name={cocktail.display_name} origin={cocktail.origin}/>
                        </Grid>
                        <Grid item sm={12} xl={6}>
                            <Spec cocktail_slug={cocktail.slug} spec={cocktail.specs[specIndex]}/>
                        </Grid>
                        <Grid item sm={12} xl={6}>
                            <Spec cocktail_slug={cocktail.slug} spec={cocktail.specs[specIndex]}/>
                        </Grid>
                    </Grid>
                </>
            )}
        </Paper>
    )
}