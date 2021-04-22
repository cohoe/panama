import React, {useState, useEffect} from 'react'
import {CocktailSpecCard} from './CocktailSpecCard'
import {useParams} from 'react-router-dom'
import {Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {CocktailTitleCard} from "./CocktailTitleCard";
import {CocktailNotesCard} from "./CocktailNotesCard";

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

    const lookupSpecIndex = (cocktail, spec_slug) => {
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
    useEffect(() => {
        if (cocktail) {
            setSpecIndex(lookupSpecIndex(cocktail, spec_slug))
        }
    }, [cocktail, spec_slug])

    // const getPreviousArrayIndex = (index) => {
    //     if (index === 0) {
    //         return 0
    //     } else {
    //         return index - 1
    //     }
    // }
    //
    // const getNextArrayIndex = (index) => {
    //     if (index === cocktail.specs.length - 1) {
    //         return index
    //     }
    //     return index + 1
    // }
    //
    // const getNextDisabled = () => {
    //     return specIndex === cocktail.specs.length - 1
    // }
    //
    // const getPreviousDisabled = () => {
    //     return specIndex === 0
    // }
    //
    // Could do a different return() here for loading

    // @TODO fix grid shit. Yeah... what grid shit?
    // @TODO sizing based on ultrawide desktop half and laptop. md works for desktop but breaks ipad. maybe lg instead?
    // @TODO styling on the code of the NotesCard there
    return (
        <Paper className={classes.cocktailPaper}>
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CocktailTitleCard display_name={cocktail.display_name} origin={cocktail.origin}/>
                        </Grid>
                        <Grid item sm={12} lg={6}>
                            <CocktailSpecCard cocktail_slug={cocktail.slug} spec={cocktail.specs[specIndex]}/>
                        </Grid>
                        <Grid item sm={12} lg={6}>
                            <CocktailNotesCard cocktail_name={cocktail.display_name}
                                               cocktail_notes={cocktail.notes}
                                               spec_name={cocktail.specs[specIndex].display_name}
                                               spec_notes={cocktail.specs[specIndex].notes}
                            />
                        </Grid>
                    </Grid>
                </>
            )}
        </Paper>
    )
}