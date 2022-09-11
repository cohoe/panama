import React from 'react'
// import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import {Box, Stack, useTheme} from '@mui/material'
import {styled} from "@mui/material/styles";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';


const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},
    {title: '12 Angry Men', year: 1957},
    {title: "Schindler's List", year: 1993},
];

const constructions = [
    {value: "stir", label: "Stir"},
    {value: "shake", label: "Shake"},
    {value: "build", label: "Build"},
    {value: "swizzle", label: "Swizzle"},
]

const SearchPaneWrapper = styled(Box)(({theme}) => ({
    label: 'SearchPaneWrapper',
    width: '100%',
    minHeight: '50px',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    padding: theme.spacing(1, 1),
}))

const AutocompleteFormControl = ({id, options=[], placeholder="", label=""}) => {
    const theme = useTheme();
    return (
        <FormControl>
            <InputLabel shrink variant="standard">{label}</InputLabel>
            <Autocomplete
                multiple
                id={id}
                options={options}
                getOptionLabel={(option) => option.title}
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
            />
        </FormControl>
    )
}

const ToggleButtonGroupControl = ({id, buttons=[], label=""}) => {
    const theme = useTheme();
    const [options, setOptions] = React.useState([])

    const updateOptions = (event, newOptions) => {
        setOptions(newOptions)
    }
    return (
        <FormControl>
            <InputLabel shrink variant="standard">{label}</InputLabel>
            <ToggleButtonGroup
                id={id}
                value={options}
                onChange={updateOptions}
                aria-label={id}
                sx={{marginTop: theme.spacing(2)}}
            >
                {buttons.map((option, i) => (
                    <ToggleButton key={option.value} value={option.value} aria-label={option.value}>
                        {option.label}
                    </ToggleButton>
                ))}
                {/*<ToggleButton value="stir" aria-label="stir">*/}
                {/*    Stir*/}
                {/*</ToggleButton>*/}
                {/*<ToggleButton value="shake" aria-label="shake">*/}
                {/*    Shake*/}
                {/*</ToggleButton>*/}
                {/*<ToggleButton value="build" aria-label="build">*/}
                {/*    Build*/}
                {/*</ToggleButton>*/}
                {/*<ToggleButton value="swizzle" aria-label="swizzle">*/}
                {/*    Swizzle*/}
                {/*</ToggleButton>*/}
            </ToggleButtonGroup>
        </FormControl>
    )
}

export const CocktailSearch = () => {
    const theme = useTheme();
    const [components, setComponents] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const fetchIngredients = async () => {
        const response = await fetch(`http://localhost:8080/api/v1/ingredients`)
        const json = await response.json()
        setComponents(json)
        setLoading(false)
    }

    React.useEffect(() => {
        fetchIngredients()
    }, [])

    return (
        <SearchPaneWrapper theme={theme}>
            <Stack spacing={2} sx={{width: 'inherit', overflow: 'hidden'}}>
                <AutocompleteFormControl id={"include-components"} placeholder={"Include..."} label={"Include Components"} options={top100Films} />
                <AutocompleteFormControl id={"exclude-components"} placeholder={"Exclude..."} label={"Exclude Components"} options={top100Films} />
                <ToggleButtonGroupControl id={"construction"} label={"Construction"} buttons={constructions} />
            </Stack>
        </SearchPaneWrapper>
    )
}
