import React from 'react'
import {InputLabel, Select, MenuItem, FormControl} from '@material-ui/core'
// import {makeStyles} from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({}))

export const FormInputSelect = ({children, query_parameter, items = {}, onChange, initialValue = ''}) => {
    // const classes = useStyles();
    const [value, setValue] = React.useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event)
    };

    return (
        <FormControl>
            <InputLabel id="label">Construction:</InputLabel>
            <Select name={query_parameter} labelId="label" id="select" value={value} onChange={handleChange}>
                {Object.keys(items).map((k) => {
                    return (<MenuItem value={k} key={k}>{items[k]}</MenuItem>)
                })}
            </Select>
        </FormControl>
    )
}