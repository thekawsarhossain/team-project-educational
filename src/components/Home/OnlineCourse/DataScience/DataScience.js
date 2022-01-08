import { Avatar, Box, Button, CardActionArea, Container, Divider, Grid } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useHistory, useLocation } from 'react-router-dom';

const DataScience = () => {

    // react router hook here 
    const location = useLocation();
    const courseType = location.pathname.split('/')[2];

    // getting all course here 
    const courses = useSelector((state) => state.courses.allCourses); const filteredCourse = courses.filter(course => course.courseName === (courseType || 'Data Science' || 'Data science' || 'data science'));

    const history = useHistory();


    return (
        <Container sx={{ my: 6 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }} >
                {
                    filteredCourse.map(course => <Grid item xs={12} sm={6} md={4} key={course._id} >
                        <Card sx={{ width: '100%', boxShadow: 1 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={course.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="p" sx={{ color: '#53545b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><LibraryBooksIcon /> {course.lessons} lessons</Typography>
                                        <Typography variant="p" sx={{ color: '#53545b', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><StarIcon sx={{ color: '#FF9415', fontSize: '18px' }} /> {course.rating} ({course.ratedBy})</Typography>
                                    </Box>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ color: '#0E1133', py: 1, fontSize: '26px' }}>
                                        {course.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar
                                                alt="avatar"
                                                src={course.instructorImg}
                                            ></Avatar>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: '#0E1133', px: 2, py: 1 }}>
                                                {course.instructorName}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Button variant="outlined" size="small">
                                                {course.courseName}
                                            </Button>
                                        </Box>
                                    </Box>
                                    <Divider sx={{ my: 2 }} />
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <del style={{ color: 'gray', fontSize: '16px' }}>${course.previousPrice}</del>
                                            <Typography gutterBottom variant="p" component="div" sx={{ color: 'blue', fontSize: '22px', px: 1 }}>
                                                ${course.newPrice}
                                            </Typography>
                                        </Box>
                                        <Button sx={{ color: '#0E1133' }} onClick={() => history.push(`/course/${course?._id}`)}> Know More <ArrowRightAltIcon /></Button>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default DataScience;