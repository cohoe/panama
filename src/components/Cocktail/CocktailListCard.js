import React from 'react'
import {Card, CardContent, Typography, useTheme} from '@mui/material';
import {styled} from "@mui/material/styles";

const StyledListCard = styled(Card)(({theme}) => ({
    borderColor: theme.palette.divider,
    border: '1px solid',
    // borderWidth: '1px',
    borderBottom: 'none',
    // borderStyle: 'solid'
}));

export const CocktailListCard = ({cocktail_display_name, spec_display_name, description}) => {
    const theme = useTheme();

    return (
        <StyledListCard theme={theme}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="textSecondary" gutterBottom>
                    {cocktail_display_name} ({spec_display_name})
                </Typography>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
        </StyledListCard>
    )
}