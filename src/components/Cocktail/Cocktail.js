import React, {useState, useEffect} from 'react'
import {Card, CardContent, Container} from '@material-ui/core'
import {Spec} from '../Spec'

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

    // https://learus.github.io/react-material-ui-carousel/
    // @TODO that
    const lookupSpec = (spec_slug) => {
        for (let i=0; i<cocktail.specs.length; i++) {
            if (cocktail.specs[i].slug === spec_slug) {
                return cocktail.specs[i]
            }
        }
        return cocktail.specs[0]
    }

    return (
        <Container>
            {loading && <p>Loading...</p>}
            {!loading && (
                <Card key={cocktail.slug}>
                    <CardContent>
                        <p>{cocktail.display_name}</p>
                        <Spec cocktail_slug={cocktail.slug} spec={lookupSpec(spec_slug)}/>
                    </CardContent>
                </Card>
            )}
        </Container>
    )
}