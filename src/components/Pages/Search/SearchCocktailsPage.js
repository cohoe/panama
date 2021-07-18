import React from "react";
import {ScrollPane, ContentPane} from "../../Page";
import {CocktailList} from "../../Cocktail/CocktailList";
import Typography from "@material-ui/core/Typography";
import {Switch, Route} from "react-router-dom";
import {CocktailPane} from "../../Cocktail";
import {CocktailSearchForm} from "../../SearchForm";

export const SearchCocktailsPage = () => {
    // https://learnwithparam.com/blog/how-to-handle-query-params-in-react-router/
    return (
        <Switch>
            <Route path={'/'}>
                <ScrollPane primaryView={true}>
                    <CocktailSearchForm/>
                </ScrollPane>
                <ContentPane>
                    <Typography>SEARCH.</Typography>
                </ContentPane>
            </Route>
        </Switch>
    )
}