import { Box } from "@mui/system";
import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import CourseSlider from "../CourseSlider/CourseSlider";
import Event from "../Event/Event";
import OnlineCourse from "../OnlineCourse/OnlineCourse";
import PopularCourse from "../PopularCourse/PopularCourse";
import Pricing from "../Pricing/Pricing";
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
  return <Box>
    <Navigation />
    <PopularCourse />
    <CourseSlider />
    <OnlineCourse />
    <Event />
    <Pricing />
    <Footer />
  </Box>;
};

export default Home;