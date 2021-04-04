import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {CocktailCustom} from "../../../components/Cocktail";
import {Switch, Route, useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    contentPane: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            flex: 1
        },
    }
}))

export const ContentPane = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    let {cocktail_slug, spec_slug} = useParams();
    console.log("LOLZ")
    console.log(cocktail_slug, spec_slug)

    return (
        <div className={classes.contentPane}>
            {/*<Typography paragraph>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt*/}
            {/*    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum*/}
            {/*    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit*/}
            {/*    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id*/}
            {/*    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit*/}
            {/*    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.*/}
            {/*    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis*/}
            {/*    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget*/}
            {/*    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem*/}
            {/*    donec massa sapien faucibus et molestie ac.*/}
            {/*</Typography>*/}
            {/*<Typography paragraph>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt*/}
            {/*    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum*/}
            {/*    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit*/}
            {/*    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id*/}
            {/*    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit*/}
            {/*    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.*/}
            {/*    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis*/}
            {/*    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget*/}
            {/*    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem*/}
            {/*    donec massa sapien faucibus et molestie ac.*/}
            {/*</Typography>*/}
            <Switch>
                <Route path="/cocktails/:cocktail_slug/:spec_slug">
                    <CocktailCustom/>
                </Route>
                <Route path="/settings">
                    <p>Settings!</p>
                </Route>
                <Route path="/">
                    <Typography>Select a cocktail.</Typography>
                </Route>
            </Switch>
        </div>
    )
}
