import React from "react";
import {ScrollPane, ContentPane} from "../../Page";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {CocktailList} from "../../Cocktail/CocktailList";
import Typography from "@material-ui/core/Typography";
import {Switch, Route} from "react-router-dom";
import {CocktailPane} from "../../Cocktail";


const useStyles = makeStyles((theme) => ({

}))

export const CocktailsPage = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Switch>
            <Route path={"/cocktails/:cocktail_slug/:spec_slug"}>
                <ScrollPane>
                    <CocktailList/>
                </ScrollPane>
                <ContentPane>
                    <CocktailPane/>
                </ContentPane>
            </Route>
            <Route path={'/'}>
                <ScrollPane>
                    <CocktailList/>
                </ScrollPane>
                <ContentPane>
                    <Typography>Select a cocktail.</Typography>
                </ContentPane>
            </Route>

        </Switch>
    )
}