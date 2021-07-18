import React, {useState, useEffect} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {FormGroup} from "@material-ui/core";
import {FormInputSelect} from "../Form";
import {useLocation, useParams} from "react-router-dom";

const useStyles = makeStyles({
    root: {},
});

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}


export const CocktailSearchForm = ({}) => {
    const classes = useStyles();
    const query = useQuery();
    console.log("Up Here")
    console.log(query.get('construction'))

    const [construction, setConstruction] = useState(query.get('construction'))
    // const handleConstruction = (event) => {
    //     setState({construction: event.target.value})
    // }

    // const handleUpdate = (event) => {
    //     setState({id: event.target.value})
    // }

    const handleSubmit = (event) => {
        console.log("SENDING")
        console.log(construction)
    }

    console.log("Hi")
    console.log(construction)

    // https://upmostly.com/tutorials/react-onchange-events-with-examples
    return (
        <div className={classes.root}>
            <form method={"get"} action={"#"}>
                <FormInputSelect items={{'shake': 'Shake', 'stir': 'Stir', 'swizzle': 'Swizzle', 'build': 'Build'}}
                                 onChange={(e) => setConstruction(e.target.value)} initialValue={construction}/>
                {/*onChange={handleConstruction}/>*/}
                <button type={"submit"} onClick={handleSubmit}>Go Go Go</button>
            </form>
        </div>
    )
}