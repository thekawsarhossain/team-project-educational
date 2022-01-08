import React from "react";
import "./About.css";
import { Container, Grid, Typography } from "@mui/material";
import about from '../../images/about.jpg'
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
const About = () => {
  return <div >
    <Navigation />
    <div className="about-section"></div>
    <Container>
      <Grid container spacing={1} className="about-info">
        <Grid item xs={12} md={6}>
          <div className="about-1">
            <img src={about} alt="" />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="about-2">
            <Typography variant="h2">Achieve Your <br />
              Goals With Educal</Typography>
            <Typography variant="h6">We are the best online educationa and course provider we can do our course from any state of the world so why you waiting for? we have 20 best teachers form different state of the world ! Already we have teach 1000 of students. </Typography>
            <button>Apply now</button>
          </div>
        </Grid>
      </Grid>
    </Container>
    <Footer />
  </div>;
};

export default About;
