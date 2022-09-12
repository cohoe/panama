import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {Box, Stack, useTheme} from '@mui/material'
import {styled} from "@mui/material/styles";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const SearchPaneWrapper = styled(Box)(({theme}) => ({
    label: 'SearchPaneWrapper',
    width: '100%',
    minHeight: '50px',
    backgroundColor: theme.palette.background.default,
    // backgroundColor: 'red',
    display: 'flex',
    padding: theme.spacing(1, 1),
}))

const AutocompleteFormControl = ({id, data = [], placeholder = "", label = "", onChange, queryParam}) => {
    const theme = useTheme();
    const [values, setValues] = React.useState([])

    const updateValues = (event, newValues) => {
        console.log("Setting autocomplete to: ")
        let valueSlugs = newValues.map((item, i) => (item.slug))
        console.log(valueSlugs)
        setValues(valueSlugs)
        onChange(queryParam, valueSlugs)
    }

    return (
        <FormControl>
            <InputLabel shrink variant="standard">{label}</InputLabel>
            <Autocomplete
                multiple
                id={id}
                options={data}
                getOptionLabel={(data) => data.display_name}
                filterSelectedOptions
                size={"small"}
                sx={{marginTop: theme.spacing(2)}}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        // label="Include Components"
                        placeholder={placeholder}
                    />
                )}
                onChange={updateValues}
            />
        </FormControl>
    )
}

const ToggleButtonGroupControl = ({id, data = [], label = "", onChange, queryParam}) => {
    const theme = useTheme();
    const [options, setOptions] = React.useState([])

    const updateOptions = (event, newOptions) => {
        console.log("Setting toggle buttons to: ")
        console.log(newOptions)
        setOptions(newOptions)
        onChange(queryParam, newOptions)
    }
    return (
        <FormControl>
            <InputLabel shrink variant="standard">{label}</InputLabel>
            <ToggleButtonGroup
                id={id}
                name={id}
                value={options}
                onChange={updateOptions}
                aria-label={id}
                sx={{marginTop: theme.spacing(2)}}
                exclusive={true}
            >
                {data.map((option, i) => (
                    <ToggleButton key={option.slug} value={option.slug} aria-label={option.slug}>
                        {option.display_name}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </FormControl>
    )
}

const StyledForm = styled('form')(({theme}) => ({
    width: 'inherit'
}))

export const CocktailSearch = () => {
    const theme = useTheme();
    const [components, setComponents] = React.useState([])
    const [constructions, setConstructions] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [formValues, setFormValues] = React.useState({});
    let navigate = useNavigate();


    const fetchSearchData = async () => {
        let response = await fetch(`http://localhost:8080/api/v1/ingredients`)
        let json = await response.json()
        setComponents(json)

        response = await fetch(`http://localhost:8080/api/v1/constructions`)
        json = await response.json()
        setConstructions(json)

        setLoading(false)
    }

    React.useEffect(() => {
        fetchSearchData()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("YOU JUST SUBMITTED A FORM! This is what we had:")
        console.log(formValues);
        // @TODO I should probably make Barbados urlencode these.
        // Especially after the Traefik+Artifactory bullshit we encountered at work.
        // https://attacomsian.com/blog/javascript-convert-object-to-query-string-parameters
        const urlParams = new URLSearchParams(formValues).toString().replaceAll("%2C", ",")
        console.log(urlParams)
        navigate(`?${urlParams}`, { replace: true });
    }
    // https://onestepcode.com/creating-a-material-ui-form/
    const handleInputChange = (queryParam, value) => {
        console.log("Calling handleInputChange")
        // console.log(e)
        // const {name, value} = e.target;
        // setFormValues({
        //     ...formValues,
        //     [name]: value,
        // });
        setFormValues({
            ...formValues,
            // The [queryParam] thing makes it the actual key not literally "queryParam".
            [queryParam]: value
        })
        console.log("Form values are now:")
        console.log(formValues)
    };

    // @TODO construction search via the API currently only supports single value.
    // Until I crack open Barbados and make that tolerate multiple the ToggleButtonGroup
    // will just have to be explicit.
    return (
        <>
            {loading && <p>Loading...</p>}
            {!loading && (
                <SearchPaneWrapper theme={theme}>
                    <StyledForm onSubmit={handleSubmit}>
                        <Stack spacing={2} sx={{width: 'inherit', overflow: 'hidden'}}>
                            <AutocompleteFormControl id={"include-components"} placeholder={"Include..."}
                                                     label={"Include Components"} data={components}
                                                     onChange={handleInputChange} queryParam={"components"}/>
                            <AutocompleteFormControl id={"exclude-components"} placeholder={"Exclude..."}
                                                     label={"Exclude Components"} data={components}
                                                     onChange={handleInputChange} queryParam={"no_components"}/>
                            <ToggleButtonGroupControl id={"construction"} label={"Construction"}
                                                      data={constructions}
                                                      onChange={handleInputChange} queryParam={"construction"}/>
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                        </Stack>
                    </StyledForm>
                </SearchPaneWrapper>
            )}
        </>
    )
}
