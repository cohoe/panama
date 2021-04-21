import React from 'react'
import {Card, CardContent, List, ListItem, Typography, Container} from '@material-ui/core'
import {Component} from '../Component'
import {Text} from "../Text";
import {makeStyles} from "@material-ui/core/styles";
import {SectionTitle} from "../Section/SectionTitle";

const useStyles = makeStyles({
    title: {
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    description: {
        fontSize: '1rem',
        fontStyle: "italic",
    },
    cardContentParent: {
        padding: 0,
    },
    mainCardContent: {
        padding: '16px'
    },
    cardLabel: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: 'auto',
        marginTop: 'auto'
    },
    cardTitleContainer: {
        display: 'flex',
        width: '100%',
        paddingLeft: '16px',
        paddingRight: '16px',
        borderBottom: '1px solid black',
        minHeight: '2rem',
        background: 'deepskyblue'
    },
    helpIcon: {
        marginLeft: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto'
    }
});

export const Spec = ({cocktail_slug, spec}) => {
    const spec_id = `${cocktail_slug}::${spec.slug}`
    const classes = useStyles();

    return (
        <Card key={spec_id}>
            <CardContent className={classes.cardContentParent}>
                <SectionTitle title={"Spec"} />
                <div className={classes.mainCardContent}>
                    <Typography variant="h2" className={classes.title} gutterBottom>
                        {spec.display_name}
                    </Typography>
                    <Typography variant="h3" className={classes.description} color="textSecondary">
                        {/*@TODO fix this*/}
                        {spec.origin.creator}, {spec.origin.venue}, {spec.origin.location}, {spec.origin.year}
                        <br/>
                        {spec.origin.story}
                    </Typography>
                    <List>
                        {spec.components.map(component => (
                            <ListItem key={component.slug}>
                                <Component component={component}/>
                            </ListItem>
                        ))}
                    </List>
                    <List>
                        {spec.instructions.map(instruction => (
                            <ListItem>
                                <Text text_object={instruction}/>
                            </ListItem>
                        ))}
                    </List>
                    <List>
                        {spec.garnish.map(garnish => (
                            <ListItem key={garnish.slug}>
                                <Component component={garnish}/>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </CardContent>
        </Card>
    )
}