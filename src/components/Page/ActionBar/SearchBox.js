import React, {useState} from "react";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import TextField from "@material-ui/core/TextField";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import {Link} from "@material-ui/core";
import {ActionBarButton} from "./ActionBarButton";
import {useParams, useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    searchBox: {
        margin: theme.spacing(1),
        width: '100%',
    },
}));

export const SearchBox = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const history = useHistory();

    // const [searchActive, setSearchActive] = useState(false)
    // const doClick = () => {
    //     console.log("YOU CLICKED THE THINGY")
    //     setSearchActive(true)
    // }

    // if (searchActive === true) {
    //     return (<div><b>LOLOLOLOL</b></div>)
    // } else {
        return (
            <ActionBarButton text={"Search"} onClick={() => {
                history.push(`/search/cocktails`)
            }} />
            // {/*<TextField*/}
            // {/*    className={classes.searchBox}*/}
            // {/*    id="input-with-icon-textfield"*/}
            // {/*    // onClick={doClick}*/}
            // {/*    // label="Search"*/}
            // {/*    InputProps={{*/}
            // {/*        startAdornment: (*/}
            // {/*            <InputAdornment position="start">*/}
            // {/*                <SearchIcon/>*/}
            // {/*            </InputAdornment>*/}
            // {/*        ),*/}
            // {/*        endAdornment: (*/}
            // {/*            <InputAdornment position="start">*/}
            // {/*                <PlayCircleOutlineIcon/>*/}
            // {/*            </InputAdornment>*/}
            // {/*        )*/}
            // {/*    }}*/}
            // {/*/>*/}
        )
    // }
}
