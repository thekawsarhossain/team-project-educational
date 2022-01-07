import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddCourses = () => {

    const { user } = useAuth();

    const { handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://lit-lake-52047.herokuapp.com/all-courses', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                if (result.insertedId) {
                    <Alert>
                        Successfull !
                    </Alert>
                }
            })
        reset();
    };



    return (
        <Container sx={{
            width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '70%',
            }, mx: 'auto'
        }}>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Add a product </Typography>
            <Box className="product-card " sx={{ p: 3, m: 2 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        sx={{ width: '95%', my: 1 }}
                        id="outlined-basic"
                        label="product Name"
                        name="name"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ width: '95%', my: 1 }}
                        id="outlined-basic"
                        label="description"
                        name="description"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ width: '95%', my: 1 }}
                        id="outlined-basic"
                        label="price"
                        name="price"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ width: '95%', my: 1 }}
                        id="outlined-basic"
                        label="Image Link"
                        name="img"
                        variant="outlined"
                    />
                    <Button
                        sx={{ width: '95%', my: 2, bgcolor: 'text.primary' }}
                        type="submit"
                        size="large"
                        variant="contained">
                        Post
                    </Button>
                </form >
            </Box>
        </Container>
    );
};

export default AddCourses;