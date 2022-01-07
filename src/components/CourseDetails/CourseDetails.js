import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Box, Grid } from '@mui/material'
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import './CourseDetails.css'
const CourseDetails = () => {

  const courseDetails = useSelector(state => state.courses.courseDetails);

  return (
    <div>
      <Container>
        <Box sx={{ width: '100%' }}>
          <Grid container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            className="course-details" >
            <Grid item xs={12} md={8}>
              <div className="details-1">
                <button>{courseDetails.courseName}</button>
                <h1>{courseDetails.title}</h1>
                <div className="flex">
                  <div className="flex-1">
                    <img src={courseDetails.instructorImg} alt="" />
                    <div className="">
                      <p><small>Teacher</small></p>
                      <p>{courseDetails.instructorName}</p>
                    </div>
                  </div>
                  <div className="flex-2">
                    <p><small> Last Update :</small></p>
                    <p>January 25, 2022</p>
                  </div>

                  <div className="flex-2">
                    <p><small>Review:</small></p>
                    <p>
                      <Rating className='rating '
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                        initialRating={courseDetails.rating}>
                      </Rating>
                      <> ({courseDetails.ratedBy})</></p>

                  </div>
                </div>
                <div className="img-description">
                  <img src={courseDetails.img} alt="" />
                  <h1>Description</h1>
                  <p>{courseDetails.description}</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className='details-2'>
                <h1>${courseDetails.newPrice}
                  <span><del>{courseDetails.previousPrice}</del></span></h1>
                <li><i class="fas fa-home"></i> Instructor : <span>{courseDetails.instructorName}</span></li>
                <li><i class="fas fa-book"></i> Lectures : <span>{courseDetails.lessons}</span></li>
                <li><i class="far fa-clock"></i> Duration : <span>11h 21m 30s</span></li>
                <li><i class="far fa-user"></i> Enrolled : <span>3 student</span></li>
                <li><i class="fas fa-tag"></i> Course level : <span>Intermediate</span></li>
                <li><i class="fas fa-globe"></i> Language : <span>English</span></li>

                <Link to='/#'>
                  <button>Add To Cart</button>
                </Link>
              </div>
            </Grid>

          </Grid>
        </Box>
      </Container>

    </div>
  );
};

export default CourseDetails;