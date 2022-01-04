import { Container } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

const LifeStyle = () => {

    // react router hook here 
    const location = useLocation();
    const courseType = location.pathname.split('/')[2];

    return (
        <Container>
            <h2>This is the lifestyle Compo</h2>
        </Container>
    );
};

export default LifeStyle;