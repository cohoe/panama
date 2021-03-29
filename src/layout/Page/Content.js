import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {Icon} from "@material-ui/core";
import {CocktailList} from "../../components/Cocktail/CocktailList";

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
    },
    paperThingy: {
        width: '340px',
        overflowY: 'scroll'
    },
    sideBar: {
        width: '50px',
        backgroundColor: 'green',
        height: '100%',
    }
}));


export const Content = () => {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <div className={classes.sideBar}>
                A
                B
                C
            </div>
            <Paper className={classes.paperThingy}>
                <CocktailList />
            </Paper>
        </main>
    )
}
