import React from 'react';
import { useSelector } from 'react-redux';
import {Container,Box,Grid} from '@mui/material'
import './CourseDetails.css'
import { Link } from 'react-router-dom';
const CourseDetails = () => {

  const courseDetails = useSelector(state => state.courses.courseDetails);
  console.log(courseDetails)

  return (
    <div>
      <Container>
      <Box sx={{ width: '100%'}}>
      <Grid container
       rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
        className="course-details" >
      <Grid  item xs={12} md={8}>
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
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i> 
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
           <>{courseDetails.rating} ({courseDetails.ratedBy})</></p>
         
         </div>
       </div>
       <div className="img-description">
         <img src={courseDetails.img} alt="" />
         <h1>Description</h1>
         <p>{courseDetails.description}</p>
       </div>
    </div>
        </Grid>
        <Grid  item xs={12} md={4}>
          <div className='details-2'>
           <h1>${courseDetails.newPrice}
           <span><del>{courseDetails.previousPrice}</del></span></h1>
            <li>Instructor : <span>{courseDetails.instructorName}</span></li>
            <li>Lectures : <span>{courseDetails.lessons}</span></li>
            <li>Duration : <span>11h 21m 30s</span></li>
            <li>Enrolled : <span>3 student</span></li>
            <li>Course level : <span>Intermediate</span></li>
            <li>Language : <span>English</span></li>

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