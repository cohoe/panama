import React from 'react';
import {Card, CardContent, Box} from '@mui/material';
import {SectionTitle} from "./SectionTitle";

export const SectionCard = ({title, keyName = title, children}) => {
    return (
        <Card key={keyName}>
            <CardContent sx={{padding: 0}}>
                <SectionTitle title={title}/>
                <Box sx={{padding: '16px'}}>
                    {children}
                </Box>
            </CardContent>
        </Card>
    )
}