
import { Button, CircularProgress, Container, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const GiveReview = () => {

    const { user } = useAuth();

    // initial information
    const initialInformation = { name: user.displayName, img: user.photoURL, comment: '' }
    const [review, setReview] = useState(initialInformation);
    const [loading, setLoading] = useState(false);

    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview)
    }

    // handle review function
    const handleReview = () => {
        setLoading(true)
        fetch('https://lit-lake-52047.herokuapp.com/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(result => {
                if (result.insertedId) {
                    setLoading(false);
                    alert('review added');
                }
            })
    }

    if (loading) {
        return <Box style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box>
    }

    return (
        <Container sx={{
            width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '50%',
            }, mx: 'auto'
        }}>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Give Your Review</Typography>
            <Box className="product-card " sx={{ p: 3, m: 2 }}>
                <TextField
                    sx={{ width: '95%', my: 1 }}
                    defaultValue={user?.displayName}
                    id="outlined-basic"
                    label="Name"
                    name="name"
                    variant="outlined"
                    onBlur={handleBlur}
                />
                <TextField
                    sx={{ width: '95%', my: 1 }}
                    id="outlined-basic"
                    defaultValue={user.photoURL}
                    label="Image Link"
                    name="photoURL"
                    variant="outlined"
                    onBlur={handleBlur}
                />
                <TextField
                    sx={{ width: '95%', my: 1 }}
                    id="outlined-basic"
                    label="comment"
                    name="comment"
                    variant="outlined"
                    onBlur={handleBlur}
                />
                <Box sx={{ width: '95%', my: 2, border: 1, margin: 'auto', p: 1 }}>
                    <Rating
                        name="rating"
                        onChange={(event, newValue) => {
                            review['rating'] = (newValue);
                        }}
                    />
                </Box>
                <Button
                    onClick={handleReview}
                    sx={{ width: '95%', my: 2, bgcolor: 'text.primary' }}
                    type="submit"
                    size="large"
                    variant="contained">
                    Post
                </Button>
            </Box>
        </Container>
    );
};

export default GiveReview;