import React from "react";
import "./Banner.css";
import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import HeroImg from '../../../images/heroImg.PNG'

const Banner = () => {
  return <div className="hero">
 <Container>
 <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="hero-section" >
      <Grid  item xs={12} md={6}>
      <div className="hero-1">
         <h1>
         <span>Access 5700+</span><br/>
         Online yellow-shapeTutorial <br/> From Top Instructor.
         </h1>
         <p>Meet university,and cultural institutions,  who'll <br/> share their experience.</p>
      <Link to='/courses'>
        <button>View all courses</button>
      </Link>
    </div>
        </Grid>
        <Grid  item xs={12} md={6}>
          <div className='hero-2'>
           <img src={HeroImg} alt="" />
          
          </div>
        </Grid>
      
      </Grid>
    </Box>
 </Container>
  </div>;
};

export default Banner;
