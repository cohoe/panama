import React, {useState, useEffect} from 'react'
import {Card, CardContent, Container, ListItem, Tabs, Tab, Typography, Button} from '@material-ui/core'
import {TabPanel} from '@material-ui/lab'
// import TabPanel from '@material-ui/core/TabsP'
import {Spec} from '../Spec'
import {Text} from "../Text";
import Carousel from 'react-material-ui-carousel'


// https://stackoverflow.com/questions/56670140/react-string-prop-passing-down-as-an-object
export const Cocktail = ({cocktail_slug, spec_slug}) => {

    const [cocktail, setCocktail] = useState()
    const [loading, setLoading] = useState(true)
    const [specIndex, setSpecIndex] = useState(0)

    const fetchData = async (cocktail_slug) => {
        const response = await fetch(`http://kobol.boston.grantcohoe.com:8080/api/v1/cocktails/${cocktail_slug}`)
        const json = await response.json()
        setCocktail(json)
        console.log("COCKTAIL HAS BEEN SET")
        // setSpecIndex(lookupSpecIndex(spec_slug))
        // setSpecIndex(lookupSpecIndex(spec_slug))
        setLoading(false)
    }

    const lookupSpecIndex = (spec_slug) => {
        console.log("Looking up something")
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
        console.log("Use Effect?")
        console.log(cocktail)
        if (cocktail) {
            setSpecIndex(lookupSpecIndex(spec_slug))
        }
    }, [cocktail])

    return (
        <Container>
            {loading && <p>Loading...</p>}
            {!loading && (
                // <Card key={cocktail.slug}>
                //     <CardContent>
                //         <p>{cocktail.display_name}</p>
                //         {/*<Tabs value={spec_slug || cocktail.specs[0].slug}>*/}
                //         {/*    {cocktail.specs.map((spec, i) => (*/}
                //         {/*        <Tab value={spec.slug} index={i} label={spec.display_name}/>*/}
                //         {/*    ))}*/}
                //         {/*</Tabs>*/}
                //         {/*<TabPanel value={"foo"}>asd</TabPanel>*/}
                //         {/*{cocktail.specs.map((spec, i) => (*/}
                //         {/*    <TabPanel value={spec.slug} index={i}>*/}
                //         {/*        <Spec cocktail_slug={cocktail_slug} spec={spec}/>*/}
                //         {/*    </TabPanel>*/}
                //         {/*))}*/}
                //         <Spec cocktail_slug={cocktail_slug} spec={cocktail.specs[lookupSpecIndex(spec_slug)]}/>
                //     </CardContent>
                // </Card>
                <Container>
                    <Container>
                        <Typography>{cocktail.display_name}</Typography>
                        <Carousel autoPlay={false} cycleNavigation={false} timeout={0} index={() => {console.log("WAT"); return lookupSpecIndex(spec_slug)}}
                                  navButtonsAlwaysVisible={true} fullHeightHover={true}>
                            {cocktail.specs.map((spec, i) => (
                                <Container>
                                    <Spec cocktail_slug={cocktail.slug} spec={spec}/>
                                </Container>
                            ))}
                        </Carousel>
                    </Container>
                    <Container>
                        <Button onClick={() => setSpecIndex(specIndex-1)}>Previous</Button>
                        <Button onClick={() => setSpecIndex(specIndex+1)}>Next</Button>
                        <Spec cocktail_slug={cocktail.slug} spec={cocktail.specs[specIndex]}/>
                    </Container>
                </Container>
            )}
        </Container>
    )
}