import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useForm } from "react-hook-form";
import './CourseDetails.css'
import { useHistory, useParams } from 'react-router-dom';
import { Box, CircularProgress, Container, Grid } from '@mui/material';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useAuth from '../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const CourseDetails = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const history = useHistory();
  const { user } = useAuth();

  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://lit-lake-52047.herokuapp.com/courses/${id}`)
      .then(response => response.json())
      .then(data => setCourseDetails(data))
      .finally(() => setLoading(false))
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.date = new Date().toLocaleDateString();
    data.email = user.email;
    data.price = courseDetails.newPrice;
    data.status = 'pending'
    fetch('https://lit-lake-52047.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        if (data.insertedId) {
          alert('order added');
          history.push('/dashboard/cart')
        }
      })
  }


  if (loading) {
    return <Box style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box>
  }

  return (<div>
    <Navigation />
    <Container>
      <Box sx={{ width: '100%' }}>
        <Grid container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="course-details" >
          <Grid item xs={12} md={8}>
            <div className="details-1">
              <button>{courseDetails?.courseName}</button>
              <h1>{courseDetails?.title}</h1>
              <div className="flex">
                <div className="flex-1">
                  <img src={courseDetails?.instructorImg} alt="" />
                  <div className="">
                    <p><small>Teacher</small></p>
                    <p>{courseDetails?.instructorName}</p>
                  </div>
                </div>

                <div className="flex-2">
                  <p><small>Review:</small></p>
                  <p>
                    <Rating className='rating '
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      readonly
                      initialRating={courseDetails?.rating}>
                    </Rating>
                    <> ({courseDetails?.ratedBy})</></p>

                </div>
              </div>
              <div className="img-description">
                <img src={courseDetails?.img} alt="" />
                <h1>Description</h1>
                <p>{courseDetails?.description}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='details-2'>
              <h1>${courseDetails?.newPrice}
                <span><del>{courseDetails?.previousPrice}</del></span></h1>
              <li><i className="fas fa-home"></i> Instructor : <span>{courseDetails?.instructorName}</span></li>
              <li><i className="fas fa-book"></i> Lectures : <span>{courseDetails?.lessons}</span></li>
              <li><i className="far fa-clock"></i> Duration : <span>11h 21m 30s</span></li>
              <li><i className="fas fa-tag"></i> Course level : <span>Intermediate</span></li>
              <li><i className="fas fa-globe"></i> Language : <span>English</span></li>
              <Button onClick={handleOpen}>Open modal</Button>
            </div >
          </Grid >

        </Grid >
      </Box >

      {/* modal info  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ textAlign: 'center' }}>
            Book Course Here
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue={user.displayName} placeholder='Name' style={{ width: '90%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("name", { required: true })} />

            <input type="number" placeholder='Number' style={{ width: '90%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("number", { required: true })} />

            <input placeholder='Address' style={{ width: '90%', marginTop: 10, marginLeft: 10, padding: 10 }} {...register("address", { required: true })} />

            <Button type="submit" variant='contained' sx={{ display: 'block', my: 2, mx: 'auto' }}>Enroll</Button>
          </form>
        </Box>
      </Modal>

    </Container >
    <Footer />
  </div >);
};

export default CourseDetails;