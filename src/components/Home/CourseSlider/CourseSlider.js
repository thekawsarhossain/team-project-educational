import React from "react";
import "./CourseSlider.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Banner1 from '../../../images/banner-img-1.png'
import Banner2 from '../../../images/banner-img-2.png'
import { Container } from "@mui/material";
import { Link}  from "react-router-dom";


const CourseSlider = () => {
  return (
  <div className="course-card">
    <Container>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <div className="card-1">
          <div className="card-content">
             <div className="card-info">
               <button className="btn-1">Free</button>
               <h2>Germany Foundation <br /> Document</h2>
               <Link to='/home'>
               <button className="btn-2">View Courses</button>
               </Link>
             </div>
             <div className="card-img">
               <img src={Banner1} alt="" />
             </div>
             </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
        <div className="card-2">
        <div className="card-content">
             <div className="card-info">
               <button className="btn-1">New</button>
               <h2>Germany Foundation <br /> Document</h2>
               <Link to='home'>
               <button className="btn-2">View Courses</button>
               </Link>
             </div>
             <div className="card-img">
               <img src={Banner2} alt="" />
             </div>
             </div>
        </div>
        </Grid>
       
      </Grid>
    </Box>
    </Container>
  </div>);
};

export default CourseSlider;


