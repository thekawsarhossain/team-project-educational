import React from "react";
import "./About.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import about from '../../images/about.jpg'
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import { useHistory } from "react-router-dom";
const About = () => {

  const history = useHistory();

  return <Box >
    <Navigation />
    <div className="about-section"></div>
    <Container>
      <Grid container spacing={1} className="about-info" sx={{ my: 4 }}>
        <Grid item xs={12} md={6}>
          <div className="about-1">
            <img style={{ width: '70%' }} src={about} alt="" />
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'start' }}>
          <div className="about-2">
            <Typography variant="h2">Achieve Your <br />
              Goals With Educal</Typography>
            <Typography variant="h6" sx={{ my: 3 }}>We are the best online educationa and course provider we can do our course from any state of the world so why you waiting for? we have 20 best teachers form different state of the world ! Already we have teach 1000 of students. We give the best services 24 hours. we try to give the best as we can, our intesion is not only doing business but also teach the actual things which will help our students !</Typography>
            <Button variant="contained" onClick={() => history.push('/courses')}>Enroll Now</Button>
          </div>
        </Grid>
      </Grid>
    </Container>
    <Footer />
  </Box>;
};

export default About;
