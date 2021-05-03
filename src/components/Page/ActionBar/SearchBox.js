import React from "react";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import TextField from "@material-ui/core/TextField";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles((theme) => ({
    searchBox: {
        margin: theme.spacing(1),
        width: '100%',
    },
}));

export const SearchBox = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <TextField
            className={classes.searchBox}
            id="input-with-icon-textfield"
            // label="Search"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="start">
                        <PlayCircleOutlineIcon/>
                    </InputAdornment>
                )
            }}
        />
    )
}
