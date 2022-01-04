import { Container } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

const DataScience = () => {

    // react router hook here 
    const location = useLocation();
    const courseType = location.pathname.split('/')[2];

    return (
        <Container>
            <h2>Here is the data science compo</h2>
        </Container>
    );
};

export default DataScience;