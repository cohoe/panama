import React, {useState, useEffect} from 'react'
import {Card, CardContent, Container} from '@material-ui/core'
import {Spec} from '../Spec'
import Carousel from 'react-material-ui-carousel'

// https://stackoverflow.com/questions/56670140/react-string-prop-passing-down-as-an-object
export const Cocktail = ({cocktail_slug, spec_slug}) => {
    const [cocktail, setCocktail] = useState({})
    const [loading, setLoading] = useState(true)

    const fetchData = async (cocktail_slug) => {
        const response = await fetch(`http://localhost:8080/api/v1/cocktails/${cocktail_slug}`)
        const json = await response.json()
        setCocktail(json)
        setLoading(false)
    }

    useEffect(() => {
        fetchData(cocktail_slug)
    }, [cocktail_slug])

    const lookupSpecIndex = (spec_slug) => {
        for (let i = 0; i < cocktail.specs.length; i++) {
            if (cocktail.specs[i].slug === spec_slug) {
                return i
            }
        }
        return 0
    }

    return (
        <Container>
            {loading && <p>Loading...</p>}
            {!loading && (
                <Card key={cocktail.slug}>
                    <CardContent>
                        <p>{cocktail.display_name}</p>
                        <Carousel autoPlay={false} cycleNavigation={false} timeout={0} index={lookupSpecIndex(spec_slug)}
                                  navButtonsAlwaysVisible={true} fullHeightHover={true} navButtonsWrapperProps={{ style: { height: 'unset'}}}>
                            {cocktail.specs.map((spec, i) => (
                                <Container>
                                    <Spec cocktail_slug={cocktail.slug} spec={spec}/>
                                </Container>
                            ))}
                        </Carousel>
                        {/*<Spec cocktail_slug={cocktail.slug} spec={lookupSpec(spec_slug)}/>*/}
                    </CardContent>
                </Card>
            )}
        </Container>
    )
}