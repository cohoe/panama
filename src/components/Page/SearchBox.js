import {InputAdornment, TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import TuneIcon from "@material-ui/icons/Tune";
import {alpha, makeStyles, useTheme} from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        }
    }
}))

export function SearchBox() {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
            />
        </div>
        // <div className={classes.searchBoxContainer}>
        //     <TextField
        //         className={classes.searchField}
        //         InputProps={{
        //             startAdornment: (
        //                 <InputAdornment position="start">
        //                     <IconButton edge="start" color="secondary">
        //                         <SearchIcon/>
        //                     </IconButton>
        //                 </InputAdornment>
        //             ),
        //             endAdornment: (
        //                 <InputAdornment position="end">
        //                     <IconButton edge="end" color="secondary">
        //                         <ClearIcon/>
        //                     </IconButton>
        //                     <IconButton edge="end" color="secondary">
        //                         <TuneIcon/>
        //                     </IconButton>
        //                 </InputAdornment>
        //             ),
        //         }}
        //         variant={"outlined"}
        //     />
        // </div>
    )
}