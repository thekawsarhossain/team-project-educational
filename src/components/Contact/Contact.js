import React from "react";
import "./Contact.css";
import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Contact = () => {
  return <div>
    <Container className="contact-section">
      <Grid container spacing={3}  >
        <Grid item xs={12} md={6}>
          <div className="contact-from">
            <Typography variant="h2">Get in touch</Typography>
            <Typography variant="p">Have a question or just want to say hi? We'd love to hear from you.</Typography>
            <div className="flex">
              <input type="text" className="input-1" placeholder="Your Name" />
              <input type="email" name="" className="input-1" placeholder="Your Email" />
            </div>
            <br />

            <input type="text" name="" id="" className="input-2" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="12" placeholder="Write Your Massage"></textarea>
            <Link to='/'>
              <button>Send Your Massage</button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 4 }}>
          <div className="address-info">
            <div className="add">
              <h4><i class="fas fa-map-marker-alt"></i> New York Office</h4>
              <p>Maypole Crescent 70-80 </p>
              <p>Upper St Norwich NR2 1LT</p>
            </div>
            <div className="add">
              <h4><i class="fas fa-envelope"></i> Email us directly</h4>
              <p>support@educal.com</p>
              <p> support@educal.com</p>
            </div>
            <div className="add">
              <h4><i class="fas fa-phone-alt"></i> Phone</h4>
              <p>+(880)124578011</p>
              <p>+(880)124578011</p>
            </div>

          </div>
        </Grid>
      </Grid>


    </Container>
  </div>;
};

export default Contact;
