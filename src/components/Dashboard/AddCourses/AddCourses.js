import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddCourses = () => {

    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.addedby = user.displayName;
        data.date = new Date().toLocaleDateString();
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
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Add a New Course </Typography>
            <Box className="product-card " sx={{ p: 3, m: 2 }}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder='Image Link' style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("img", { required: true })} />

                    <input placeholder='Course Name' style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("courseName", { required: true })} />

                    <input placeholder='Lessons' type="number" style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("lessons", { required: true })} />

                    <input placeholder='Duration' type="number" style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("duration", { required: true })} />

                    <input placeholder='Course Level' style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("courseLevel", { required: true })} />

                    <input placeholder='Language' style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("language", { required: true })} />

                    <input placeholder='Rating' type="number" style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("rating", { required: true })} />

                    <input placeholder='Rated people' type="number" style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("ratedBy", { required: true })} />

                    <input placeholder='Course Title' style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("title", { required: true })} />

                    <input placeholder='Instructor Name' style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("instructorName", { required: true })} />

                    <input placeholder='Instructor Image' style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("instructorImg", { required: true })} />

                    <input placeholder=' Previous Price' type="number" style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("previousPrice", { required: true })} />

                    <input placeholder=' New Price' type="number" style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("newPrice", { required: true })} />

                    <input placeholder=' Description' style={{ width: '48%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("description", { required: true })} />


                    <Button
                        sx={{ width: '48%', marginTop: 10, my: 2, bgcolor: 'text.primary' }}
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