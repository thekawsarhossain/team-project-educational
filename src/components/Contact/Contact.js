import React from "react";
import "./Contact.css";
import { Container, Grid, Typography, Box, Button, Alert } from "@mui/material";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Contact = () => {

  const { user } = useAuth();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.date = new Date().toLocaleDateString();
    fetch('http://localhost:8000/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        if (result.insertedId) {
          <Alert>
            Successfull !
          </Alert>
        }
      })
    reset();
  }

  return <div>
    <Navigation />
    <Container className="contact-section">
      <Grid container spacing={3}  >
        <Grid item xs={12} md={6}>
          <Typography variant="h2">Get in touch</Typography>
          <Typography variant="p">Have a question or just want to say hi? We'd love to hear from you.</Typography>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>

              <input defaultValue={user.displayName} placeholder='Name' style={{ width: '95%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("name", { required: true })} />

              <input defaultValue={user.email} placeholder='Email' style={{ width: '95%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("email", { required: true })} />

              <input placeholder='Subject' style={{ width: '95%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("subject", { required: true })} />

              <textarea placeholder='Your Message' type="number" style={{ width: '95%', marginTop: 10, marginLeft: 10, padding: '50px 10px', border: '1px solid #333' }} {...register("message", { required: true })} />

              <Button type="submit" variant="contained" sx={{ mt: 2 }}>Send Your Massage</Button>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="address-info">
            <div className="add">
              <h4><i className="fas fa-map-marker-alt"></i> New York Office</h4>
              <p>Maypole Crescent 70-80 </p>
              <p>Upper St Norwich NR2 1LT</p>
            </div>
            <div className="add">
              <h4><i className="fas fa-envelope"></i> Email us directly</h4>
              <p>support@educal.com</p>
              <p> support@educal.com</p>
            </div>
            <div className="add">
              <h4><i className="fas fa-phone-alt"></i> Phone</h4>
              <p>+(880)124578011</p>
              <p>+(880)124578011</p>
            </div>
          </div>
        </Grid >
      </Grid >
    </Container >
    <Footer />
  </div >;
};

export default Contact;
