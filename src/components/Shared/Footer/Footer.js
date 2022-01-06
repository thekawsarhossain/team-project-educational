import { Container } from "@mui/material";
import React from "react";
import "./Footer.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FooterBanner from "../../Home/FooterBanner/FooterBanner";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
  <div>
    <FooterBanner/>
  <footer>
  <Container>
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={12} md={4}>
          <div className="footer-item-1">
            <img src="https://www.devsnews.com/wp/educal/wp-content/themes/educal/assets/img/logo/logo.png" alt="" srcset="" />
         <p>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
         <div className="footer-icon ">
                <a target='_blank' href="https://www.facebook.com">      <i className="fab fa-facebook-f"></i></a>
               <a target='_parent' href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
            <a target='_blank' href="https://twitter.com/home"> <i className="fab fa-twitter"></i></a>
           
           <a target='_blank' href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
            
          </div>
          </div>
        </Grid>
        <Grid item xs={12}md={4}>
        <div className="footer-item-2">
        <h2>Company</h2>
        <ul>
         <Link to='/about'>
         <li>About</li>
         </Link>
          <Link to='/courses'>
          <li>Courses</li>
          </Link>
        <Link to='/blogs'>
        <li>Events</li>
        </Link>
         <Link to='/contact'>
         <li>Contact</li>
         </Link>
         
        </ul>
        </div>
        </Grid>
        <Grid item xs={12} md={4}>
        <div className="footer-item-2">
        <h2>Platform</h2>
        <ul>
        <Link to='/#'>
        <li>Browser Library</li>
         </Link>
         <Link to='/#'>
         <li>Library</li>
         </Link>
         <Link to='/#'>
         <li>Partners</li>
         </Link>
         <Link to='/#'>
         <li>News & Blogs</li>
         </Link>
         <Link to='/#'>
         <li>FAQs</li>
         </Link>
         <Link to='/#'>
         <li>Tutorials</li>
         </Link>
        </ul>
        </div>
        </Grid> <Grid item xs={12} md={4}>
        <div className="footer-item-4">
          <h2>Subscribe</h2>
          <input type="search" name="" placeholder="Search " className="search" />
            <button className='arrow-btn'><i className="fas fa-arrow-right"></i></button>
          <p>Get the latest news and updates right at your inbox.</p>
        </div>
        </Grid>
      </Grid>
    </Box>
   
  </Container>
  <div className="copyright">
      <p>Copyright © 2022 Team-89  All Rights Reserved</p>
    </div>
  </footer>
  </div>);
};

export default Footer;
