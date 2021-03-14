import React, {useState, useEffect} from 'react'
import {Card, CardContent, Container, ListItem, Tabs, Tab} from '@material-ui/core'
import {TabPanel} from '@material-ui/lab'
// import TabPanel from '@material-ui/core/TabsP'
import {Spec} from '../Spec'
import {Text} from "../Text";

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
                        <Tabs value={spec_slug || cocktail.specs[0].slug}>
                            {cocktail.specs.map((spec, i) => (
                                <Tab value={spec.slug} index={i} label={spec.display_name}/>
                            ))}
                        </Tabs>
                        <TabPanel value={"foo"}>asd</TabPanel>
                        {/*{cocktail.specs.map((spec, i) => (*/}
                        {/*    <TabPanel value={spec.slug} index={i}>*/}
                        {/*        <Spec cocktail_slug={cocktail_slug} spec={spec}/>*/}
                        {/*    </TabPanel>*/}
                        {/*))}*/}
                    </CardContent>
                </Card>
            )}
        </Container>
    )
}