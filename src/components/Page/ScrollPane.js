import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    scrollPane: {
        [theme.breakpoints.up('md')]: {
            width: '340px',
        },
        [theme.breakpoints.only('sm')]: {
            flex: 1, // @TODO width 50%?
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #000'
    },
    scrollPaneActive: {
        // display: 'flex'
    },
    scrollPaneInactive: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    scrollPaneInner: {
        overflowY: 'scroll',
    }
}))

export const ScrollPane = ({children}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    // @TODO fix scrolling on mobile
    return (
        <div className={classes.scrollPane + ' ' + classes.scrollPane}>
            {children}
            {/*<ActionBar>*/}
            {/*    <ActionBarButton text={"history"}/>*/}
            {/*</ActionBar>*/}
            {/*<div className={classes.scrollPaneInner}>*/}
            {/*    <CocktailList/>*/}
            {/*</div>*/}
        </div>
        // <Switch>
        //     <Route exact path="/cocktails/:cocktail_slug/:spec_slug">
        //         <div className={classes.scrollPane + ' ' + classes.scrollPaneInactive}>
        //             <ActionBar>
        //                 <ActionBarButton text={"history"}/>
        //             </ActionBar>
        //             <div className={classes.scrollPaneInner}>
        //                 <CocktailList/>
        //             </div>
        //         </div>
        //     </Route>
        //     <Route path="/">
        //         <div className={classes.scrollPane}>
        //             <Typography>Hork Tork</Typography>
        //         </div>
        //     </Route>
        // </Switch>
    )
}