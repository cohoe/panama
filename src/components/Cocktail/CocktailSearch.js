import React from 'react'
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import {Box, Stack, useTheme} from '@mui/material'
import {styled} from "@mui/material/styles";

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
    backgroundColor: 'red',
    display: 'flex',
    padding: theme.spacing(1, 1),
}))

export const CocktailSearch = () => {
    const theme = useTheme();
    return (
        <SearchPaneWrapper theme={theme}>
            <Stack spacing={2} sx={{width: 'inherit', overflow: 'hidden'}}>
                <Autocomplete
                    multiple
                    id="include-components"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    size={"small"}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Include Components"
                            placeholder="Include..."
                        />
                    )}
                />
                <Autocomplete
                    multiple
                    id="exclude-components"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    size={"small"}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Exclude Components"
                            placeholder="Exclude..."
                        />
                    )}
                />
            </Stack>
        </SearchPaneWrapper>
    )
}
