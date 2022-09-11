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

const SearchPaneWrapper = styled(Box)(({theme}) => ({
    label: 'SearchPaneWrapper',
    width: '100%',
    minHeight: '50px',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    padding: theme.spacing(1, 1),
}))

export const CocktailSearch = () => {
    const theme = useTheme();
    const [constructions, setConstructions] = React.useState([])

    const updateConstructions = (event, newConstructions) => {
        setConstructions(newConstructions)
    }

    return (
        <SearchPaneWrapper theme={theme}>
            <Stack spacing={2} sx={{width: 'inherit', overflow: 'hidden'}}>
                <FormControl>
                    <InputLabel shrink variant="standard" forHtml={"include-components"}>Include Components</InputLabel>
                    <Autocomplete
                        multiple
                        id="include-components"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        filterSelectedOptions
                        size={"small"}
                        sx={{marginTop: theme.spacing(2)}}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                // label="Include Components"
                                placeholder="Include..."
                            />
                        )}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel shrink variant="standard" forHtml={"exclude-components"}>Exclude Components</InputLabel>
                    <Autocomplete
                        multiple
                        id="exclude-components"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        filterSelectedOptions
                        size={"small"}
                        sx={{marginTop: theme.spacing(2)}}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                // label="Exclude Components"
                                placeholder="Exclude..."
                            />
                        )}
                    />
                </FormControl>
                {/*<FormControlLabel label={"Construction"} />*/}
                <FormControl>
                    <InputLabel shrink variant="standard" forHtml={"construction-input"}>Construction</InputLabel>
                    {/*<InputBase>*/}
                    <ToggleButtonGroup
                        id={"construction-input"}
                        value={constructions}
                        onChange={updateConstructions}
                        aria-label="construction"
                        sx={{marginTop: theme.spacing(2), justifyContent: 'center'}}
                    >
                        <ToggleButton value="stir" aria-label="stir">
                            Stir
                        </ToggleButton>
                        <ToggleButton value="shake" aria-label="shake">
                            Shake
                        </ToggleButton>
                        <ToggleButton value="build" aria-label="build">
                            Build
                        </ToggleButton>
                        <ToggleButton value="swizzle" aria-label="swizzle">
                            Swizzle
                        </ToggleButton>
                    </ToggleButtonGroup>
                    {/*</InputBase>*/}
                </FormControl>
            </Stack>
        </SearchPaneWrapper>
    )
}
