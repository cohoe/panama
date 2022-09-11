import React from 'react';

import {Button} from '@mui/material';
import {Link} from "react-router-dom";


export const ActionBarButton = ({text, path = "#"}) => {
    return (
        <Link to={path} key={text}>
            <Button sx={{height: '100%'}}>{text}</Button>
        </Link>
    )
}