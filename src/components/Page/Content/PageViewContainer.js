import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Switch, Route} from "react-router-dom";
import {CocktailsPage} from "../../Pages";
import {SearchCocktailsPage} from "../../Pages";

const useStyles = makeStyles((theme) => ({
    pageViewContainer: {
        display: 'flex',
        overflow: 'hidden',
        flex: 1
    }
}))

export const PageViewContainer = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.pageViewContainer}>
            <Switch>
                <Route path="/cocktails" component={CocktailsPage}/>
                <Route path="/search/cocktails" component={SearchCocktailsPage}/>
            </Switch>
        </div>
    )
}