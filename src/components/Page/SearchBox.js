import {InputAdornment, TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import TuneIcon from "@material-ui/icons/Tune";
import {makeStyles, useTheme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    searchField: {},
    searchBoxContainer: {

    }
}))

export function SearchBox() {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.searchBoxContainer}>
            <TextField
                className={classes.searchField}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton edge="start" color="secondary">
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton edge="end" color="secondary">
                                <ClearIcon/>
                            </IconButton>
                            <IconButton edge="end" color="secondary">
                                <TuneIcon/>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                variant={"outlined"}
            />
        </div>
    )
}