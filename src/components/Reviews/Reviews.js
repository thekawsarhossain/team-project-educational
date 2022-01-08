import { CircularProgress, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from '@mui/system';

// Import Swiper styles
import 'swiper/css/bundle'
import 'swiper/css'
import './Reviews.css';

// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../Redux/slices/reviewSlice';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Reviews = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchReviews())
    }, [dispatch])

    const reviews = useSelector(state => state.reviews.reviews)
    const status = useSelector(state => state.reviews.status)

    return (
        <Box  >
            <Navigation />
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold', marginTop: 20 }}>REVIEW BY USERS</Typography>
            <Container sx={{ my: 6 }}>
                <Swiper sx={{ pt: 3 }} effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "initialSlide": 3,
                    "activeSlideKey": 4,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={true} className="mySwiper">
                    {
                        status === 'pending' ? <Box style={{ width: '100%', height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box> :
                            reviews.map(review => <SwiperSlide key={review._id} >{<Review reviews={review} />}</SwiperSlide>)
                    }
                </Swiper>
            </Container>
            <Footer />
        </Box >
    );
};

export default Reviews;