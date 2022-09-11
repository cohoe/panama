import React from 'react'
import {alpha, styled} from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import TuneIcon from "@mui/icons-material/Tune";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

const Search = styled('div')(({theme}) => ({
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

}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    // height: '100%',
    // position: 'absolute',
    // pointerEvents: 'none',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
}));

const StyledIconButton = styled(IconButton)(({theme}) => ({
    padding: theme.spacing(1, 1),
    height: '100%',
    // position: 'absolute',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: theme.spacing(0, 0),
    color: 'inherit',
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    // alignItems: 'center',
    // justifyContent: 'center',




    '& .MuiInputBase-input': {
        // padding: theme.spacing(1, 1, 1, 1),
        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        margin: theme.spacing(0, 0),
        transition: theme.transitions.create('width'),
        width: '100%',
        // height: '1em',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },


}));

export const AppbarSearch = () => {
    return (
        <Search>
            <StyledIconButton>
                <SearchIcon/>
            </StyledIconButton>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
            />
            <StyledIconButton>
                <ClearIcon/>
            </StyledIconButton>
            <StyledIconButton>
                <TuneIcon/>
            </StyledIconButton>
        </Search>
    )
}