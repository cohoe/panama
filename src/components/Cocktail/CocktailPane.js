import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Grid, useTheme, Paper} from "@mui/material";
import {CocktailTitleCard} from "./CocktailTitleCard";
import {CocktailNotesCard} from "./CocktailNotesCard";
import {CocktailSpecCard} from './CocktailSpecCard';
import {styled} from "@mui/material/styles";

const StyledPaper = styled(Paper)(() => ({
    backgroundColor: 'pink',
}));

export const CocktailPane = () => {
    let {cocktail_slug, spec_slug} = useParams();
    const theme = useTheme();

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

    return (
        <StyledPaper theme={theme}>
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CocktailTitleCard display_name={cocktail.display_name} origin={cocktail.origin}/>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <CocktailSpecCard cocktail_slug={cocktail.slug} spec={cocktail.specs[specIndex]}/>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <CocktailNotesCard cocktail_name={cocktail.display_name}
                                               cocktail_notes={cocktail.notes}
                                               spec_name={cocktail.specs[specIndex].display_name}
                                               spec_notes={cocktail.specs[specIndex].notes}
                            />
                        </Grid>
                    </Grid>
                </>
            )}
        </StyledPaper>
    )
}