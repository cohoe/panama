import React from 'react'
import {Card, CardContent, Typography} from '@mui/material';

export const CocktailListCard = ({cocktail_display_name, spec_display_name, description}) => {
    return (
        <Card>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="textSecondary" gutterBottom>
                    {cocktail_display_name} ({spec_display_name})
                </Typography>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}