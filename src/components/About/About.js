import React from "react";
import "./About.css";
import { Container, Grid } from "@mui/material";
import about from '../../images/about.jpg'
const About = () => {
  return <div >
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
            <h1>Achieve Your <br />
              Goals With Educal</h1>
            <p>Lost the plot bobby such a fibber bleeding bits and bobs don't <br />
              get shirty with me bugger all mate chinwag super pukka william <br /> barney, horse play buggered.</p>
            <button>Apply now</button>
          </div>
        </Grid>
      </Grid>
    </Container>
  </div>;
};

export default About;
