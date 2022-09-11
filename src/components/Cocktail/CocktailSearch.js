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

const SearchPaneWrapper = styled(Box)(({theme}) => ({
    label: 'SearchPaneWrapper',
    width: '100%',
    minHeight: '50px',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    padding: theme.spacing(1, 1),
}))

const AutocompleteFormControl = ({id, options = [], placeholder = "", label = "", onChange = null}) => {
    const theme = useTheme();
    return (
        <FormControl>
            <InputLabel shrink variant="standard">{label}</InputLabel>
            <Autocomplete
                multiple
                id={id}
                options={options}
                getOptionLabel={(option) => option.display_name}
                filterSelectedOptions
                size={"small"}
                sx={{marginTop: theme.spacing(2)}}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        // label="Include Components"
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                )}
            />
        </FormControl>
    )
}

const ToggleButtonGroupControl = ({id, buttons = [], label = "", onChange, queryParam}) => {
    const theme = useTheme();
    const [options, setOptions] = React.useState([])

    const updateOptions = (event, newOptions) => {
        console.log("Setting toggle buttons to: ")
        console.log(newOptions)
        setOptions(newOptions)
        onChange(event)
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
            >
                {buttons.map((option, i) => (
                    <ToggleButton key={option.slug} value={option.slug} aria-label={option.slug}>
                        {option.display_name}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </FormControl>
    )
}

export const CocktailSearch = () => {
    const theme = useTheme();
    const [components, setComponents] = React.useState([])
    const [constructions, setConstructions] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [formValues, setFormValues] = React.useState({});

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
        console.log(formValues);
    }
    // https://onestepcode.com/creating-a-material-ui-form/
    const handleInputChange = (e) => {
        console.log("Calling handleInputChange")
        console.log(e)
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        console.log("Form values are now:")
        console.log(formValues)
    };

    return (
        <>
            {loading && <p>Loading...</p>}
            {!loading && (
                <SearchPaneWrapper theme={theme}>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2} sx={{width: 'inherit', overflow: 'hidden'}}>
                            <AutocompleteFormControl id={"include-components"} placeholder={"Include..."}
                                                     label={"Include Components"} options={components}
                                                     onChange={handleInputChange}/>
                            <AutocompleteFormControl id={"exclude-components"} placeholder={"Exclude..."}
                                                     label={"Exclude Components"} options={components}
                                                     onChange={handleInputChange}/>
                            <ToggleButtonGroupControl id={"construction"} label={"Construction"}
                                                      buttons={constructions}
                                                      onChange={handleInputChange} queryParam={"construction"}/>
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </SearchPaneWrapper>
            )}
        </>
    )
}
