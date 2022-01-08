import { Card, CardContent, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from '../../../Redux/slices/messagesSlice';

const Messages = () => {

    //calling redux thunk to get data 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessages())
    }, [dispatch])


    const messages = useSelector(state => state.messages.messages)
    const loading = useSelector(state => state.messages.status)

    return (
        <Container className="parent" sx={{
            width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '90%',
            }, mx: 'auto'
        }}>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold', mb: 2 }}>All Messages</Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    loading === 'pending' ? <Box style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box>
                        : messages.map(message => <Grid item xs={6} sm={4} md={4} key={message._id}>
                            <Card sx={{ minWidth: 275, textAlign: 'start' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {message.date}
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        Email: {message.email}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        Name: {message.name}
                                    </Typography>
                                    <Typography sx={{ mb: 2 }} color="text.secondary">
                                        Subject: {message.subject}
                                    </Typography>
                                    <Typography variant="body2">
                                        Message: {message.message}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>)}
            </Grid>
        </Container>
    );
};

export default Messages;