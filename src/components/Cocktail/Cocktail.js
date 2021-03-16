import React, {useState, useEffect} from 'react'
import {Card, CardContent, Container, ListItem, Tabs, Tab, Typography, Button} from '@material-ui/core'
import {TabPanel} from '@material-ui/lab'
// import TabPanel from '@material-ui/core/TabsP'
import {Spec} from '../Spec'
import {Text} from "../Text";
import Carousel from 'react-material-ui-carousel'


// https://stackoverflow.com/questions/56670140/react-string-prop-passing-down-as-an-object
export const CocktailCarousel = ({cocktail_slug, spec_slug}) => {

    const [cocktail, setCocktail] = useState()
    const [loading, setLoading] = useState(true)
    const [specIndex, setSpecIndex] = useState(0)

    const fetchData = async (cocktail_slug) => {
        const response = await fetch(`http://localhost:8080/api/v1/cocktails/${cocktail_slug}`)
        const json = await response.json()
        setCocktail(json)
        setLoading(false)
    }

    const lookupSpecIndex = (spec_slug) => {
        // console.log("Looking up something")
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
        if (cocktail) {
            setSpecIndex(lookupSpecIndex(spec_slug))
        }
    }, [cocktail])

    return (
        <Container>
            {loading && <p>Loading...</p>}
            {!loading && (
                <Container>
                    <Container>
                        <Typography>{cocktail.display_name}</Typography>
                        <Carousel autoPlay={false} cycleNavigation={false} timeout={0} index={specIndex}
                                  navButtonsAlwaysVisible={true} fullHeightHover={true}>
                            {cocktail.specs.map((spec, i) => (
                                <Container>
                                    <Spec cocktail_slug={cocktail.slug} spec={spec}/>
                                </Container>
                            ))}
                        </Carousel>
                    </Container>
                </Container>
            )}
        </Container>
    )
}

export const CocktailCustom = ({cocktail_slug, spec_slug}) => {

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

    return (
        <Container>
            {loading && <p>Loading...</p>}
            {!loading && (
                <Container>
                    <Container>
                        <Button disabled={getPreviousDisabled()}
                                onClick={() => setSpecIndex(getPreviousArrayIndex(specIndex))}>Previous</Button>
                        <Button disabled={getNextDisabled()} onClick={() => setSpecIndex(getNextArrayIndex(specIndex))}>Next</Button>
                        <Spec cocktail_slug={cocktail.slug} spec={cocktail.specs[specIndex]}/>
                    </Container>
                </Container>
            )}
        </Container>
    )
}