import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import './CourseDetails.css'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/slices/cartSlice';
import { Box, CircularProgress, Container, Grid } from '@mui/material';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const CourseDetails = () => {

  const dispatch = useDispatch();

  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://lit-lake-52047.herokuapp.com/courses/${id}`)
      .then(response => response.json())
      .then(data => setCourseDetails(data))
      .finally(() => setLoading(false))
  })

  if (loading) {
    return <Box style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box>
  }


  return (<div>
    <Navigation />
    <Container>
      <Box sx={{ width: '100%' }}>
        <Grid container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="course-details" >
          <Grid item xs={12} md={8}>
            <div className="details-1">
              <button>{courseDetails?.courseName}</button>
              <h1>{courseDetails?.title}</h1>
              <div className="flex">
                <div className="flex-1">
                  <img src={courseDetails?.instructorImg} alt="" />
                  <div className="">
                    <p><small>Teacher</small></p>
                    <p>{courseDetails?.instructorName}</p>
                  </div>
                </div>

                <div className="flex-2">
                  <p><small>Review:</small></p>
                  <p>
                    <Rating className='rating '
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      readonly
                      initialRating={courseDetails?.rating}>
                    </Rating>
                    <> ({courseDetails?.ratedBy})</></p>

                </div>
              </div>
              <div className="img-description">
                <img src={courseDetails?.img} alt="" />
                <h1>Description</h1>
                <p>{courseDetails?.description}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='details-2'>
              <h1>${courseDetails?.newPrice}
                <span><del>{courseDetails?.previousPrice}</del></span></h1>
              <li><i className="fas fa-home"></i> Instructor : <span>{courseDetails?.instructorName}</span></li>
              <li><i className="fas fa-book"></i> Lectures : <span>{courseDetails?.lessons}</span></li>
              <li><i className="far fa-clock"></i> Duration : <span>11h 21m 30s</span></li>
              <li><i className="fas fa-tag"></i> Course level : <span>Intermediate</span></li>
              <li><i className="fas fa-globe"></i> Language : <span>English</span></li>

              <Link to='/#'>
                <button onClick={() => dispatch(addToCart(courseDetails))}>Add To Cart</button>
              </Link>
            </div >
          </Grid >

        </Grid >
      </Box >
    </Container >
    <Footer />
  </div >);
};

export default CourseDetails;