import React, {useState, useEffect} from 'react'
import {CocktailListCard} from "./CocktailListCard";
import {Link, useLocation, useSearchParams} from "react-router-dom";

export const CocktailSearchResultListPane = () => {
    const [cocktails, setCocktails] = useState()
    const [loading, setLoading] = useState(true)
    let location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();

    const fetchData = async (rawSearchParams) => {
        const response = await fetch('http://localhost:8080/api/v1/cocktails/search?' + rawSearchParams)
        const json = await response.json()
        setCocktails(json)
        setLoading(false)
    }

    useEffect(() => {
        // console.log(location)
        console.log("FOO")
        // @TODO I should probably make Barbados urlencode these.
        // Especially after the Traefik+Artifactory bullshit we encountered at work.
        // https://attacomsian.com/blog/javascript-convert-object-to-query-string-parameters
        // const urlParams = new URLSearchParams(formValues).toString()
        // console.log()
        // const currentParams = Object.fromEntries([...searchParams]);
        // console.log(currentParams)
        let rawSearchParams = searchParams.toString().replaceAll("%2C", ",")
        fetchData(rawSearchParams)
    }, [searchParams])

    const getSpecDescription = (spec) => {
        let description = "";
        spec.components.map((component) => (
            description += component.slug + " "
        ))
        return description
    }

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    {cocktails.map((result, i) => (
                        <div key={i}>
                            <Link to={`/cocktails/${result.cocktail_slug}/${result.spec_slug}`} key={`${result.cocktail_slug}_${result.spec_slug}`}>
                                <CocktailListCard cocktail_display_name={result.cocktail_display_name} spec_display_name={result.spec_display_name}
                                                  description={result.component_display_names.join(", ")}>
                                </CocktailListCard>
                            </Link>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}