import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, useHistory } from "react-router-dom";
import logo from '../../../images/logo.png';
const Footer = () => {


  const history = useHistory();
  return (
    <Box sx={{ bgcolor: '#0E1133', color: '#fff' }}>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ py: 4, textAlign: 'start' }}>
          <Grid item md={4} sx={{ p: 2 }}>
            <Typography onClick={() => history.push('/')} sx={{ display: 'flex' }}>
              <img style={{ width: '20%', padding: 5 }} src={logo} alt="" />
              <h3 className="title">Educal</h3>
            </Typography>
            <Typography variant="p">Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography sx={{ py: 1, color: '#fff' }} variant="h6">ADDRESS</Typography>
            <Box>
              <Typography sx={{ py: 1 }} variant="button">Offic: <span>Aruail, BrahmanBaria, Bangladesh </span> </Typography> <br />
              <Typography sx={{ py: 1 }} variant="button">Mobile: <span>+088 01907000000</span></Typography> <br />
              <Typography sx={{ py: 1 }} variant="button">Email: <span>educal@web.gmail.com</span></Typography>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Typography sx={{ py: 1, color: '#fff', textAlign: 'right' }} variant="h6">SIGN UP TO NEWSLETTER</Typography>
            <TextField variant="filled" sx={{ bgcolor: '#fff' }} fullWidth label="Email" id="fullWidth" />
          </Grid>
        </Grid>
        <div>
          <small>Copyright © 2022 Team-89  All Rights Reserved</small>
        </div>
      </Container>
    </Box>);
};

export default Footer;
