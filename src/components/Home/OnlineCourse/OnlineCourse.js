import React from "react";
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Badge, Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useHistory, Switch, Route } from "react-router-dom";
import "./OnlineCourse.css";
import AllCourses from "./AllCourses/AllCourses";
import DataScience from "./DataScience/DataScience";
import Marketing from "./Marketing/Marketing";
import LifeStyle from "./LifeStyle/LifeStyle";
import Finance from "./Finance/Finance";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    left: 10,
    top: -20,
    border: `3px solid ${theme.palette.background.paper}`,
    padding: '3px 20px',
    backgroundColor: '#2B4EFF',
  },
}));


const OnlineCourse = () => {
  // react router hook
  const history = useHistory();


  return <Box sx={{ bgcolor: '#F3F4F8', py: 10, textAlign: 'start' }}>
    <Container>
      <Grid container spacing={{ xs: 4, md: 10 }} columns={{ xs: 12, sm: 8, md: 12 }}>
        {/* online courses title area start here  */}
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h3" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#0E1133', fontSize: '40px' }}>
            Find The Right <br />
            Online Course For You
          </Typography>
          <Typography variant="p" sx={{ color: '#53545b' }}> You don't have to struggle alone, you've got our assistance and help.</Typography>
        </Grid>
        {/* online courses navigation bar start here */}
        <Grid item xs={12} sm={12} md={6}>
          <AppBar position="static" sx={{ bgcolor: '#F3F4F8', boxShadow: 0, mt: { sm: 0, md: 0, lg: 12.5 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Button onClick={() => history.push(`/`)} style={{ color: '#2B4EFF' }}>
                <StyledBadge badgeContent='New' color="secondary"></StyledBadge>
                See All</Button>
              <Button onClick={() => history.push(`/home/data-science`)} style={{ color: '#0e1133' }}>Data Science</Button>
              <Button onClick={() => history.push(`/home/marketing`)} style={{ color: '#0e1133' }}>Marketing</Button>
              <Button onClick={() => history.push(`/home/lifestyle`)} style={{ color: '#0e1133' }}>Lifestyle</Button>
              <Button onClick={() => history.push(`/home/finance`)} style={{ color: '#0e1133' }}>Finance</Button>
            </Box>
          </AppBar>
        </Grid>
      </Grid>
    </Container>

    {/* nestead routing here  */}
    <Switch>
      <Route exact path={`/`} component={AllCourses} />
      <Route path={`/home/data-science`} component={DataScience} />
      <Route path={`/home/marketing`} component={Marketing} />
      <Route path={`/home/lifestyle`} component={LifeStyle} />
      <Route path={`/home/finance`} component={Finance} />
    </Switch>

  </Box >;
};

export default OnlineCourse;
