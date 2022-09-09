import React, {useState, useEffect} from 'react'
import {CocktailListCard} from "./CocktailListCard";
import {Link} from "react-router-dom";

export const CocktailList = () => {
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
        <div>
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    {cocktails.map((cocktail, i) => (
                        <div key={i}>
                            {cocktail.specs.map((spec) => (
                                <Link to={`/cocktails/${cocktail.slug}/${spec.slug}`} key={`${cocktail.slug}_${spec.slug}`}>
                                    <CocktailListCard cocktail_display_name={cocktail.display_name} spec_display_name={spec.display_name}
                                                      description={getSpecDescription(spec)}>
                                    </CocktailListCard>
                                </Link>
                            ))}
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}