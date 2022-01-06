import { Box, Button, Container, Paper, Typography } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { fetchEventDetails, fetchEvents } from "../../../Redux/slices/eventSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Event.css";
import { useHistory } from "react-router-dom";

const Event = () => {

  //calling redux thunk to get data 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents())
  }, [dispatch])

  const events = useSelector((state) => state.events.events);

  const histroy = useHistory();

  // handle course function here 
  const handleEvent = id => {
    dispatch(fetchEventDetails(id))
    histroy.push(`/event/${id}`);
  }


  return <Container sx={{ py: 8 }}>
    {/* component title and description here  */}
    <Box>
      <Typography variant="h3" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#0E1133', fontSize: '40px' }}>
        Current Events
      </Typography>
      <Typography variant="p" sx={{ color: '#53545b' }}> We found 13 events available for you.</Typography>
    </Box>
    {/* events items start here  */}
    <Box sx={{ my: 6 }}>
      {
        events?.map(event => <Paper key={event._id} elevation={2} sx={{ p: 3, my: 2, width: '70%', mx: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ textAlign: 'start' }}>
            <Typography variant="p" sx={{ color: '#333' }}>{event?.date} | </Typography>
            <Typography variant="p" sx={{ color: '#333' }}>{event?.time} | </Typography>
            <Typography variant="p" sx={{ color: '#333' }}>{event?.place} </Typography>
            <Typography variant="h5" sx={{ color: '#0E1133', fontWeight: 'bold', pt: 1 }}>{event?.title} </Typography>
          </Box>
          <Button onClick={() => handleEvent(event?._id)}> View More <ArrowRightAltIcon /></Button>
        </Paper>)
      }
    </Box>
  </Container>;
};

export default Event;
