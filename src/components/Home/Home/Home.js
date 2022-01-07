import { Box } from "@mui/system";
import React from "react";
import CourseSlider from "../CourseSlider/CourseSlider";
import Event from "../Event/Event";
import OnlineCourse from "../OnlineCourse/OnlineCourse";
import PopularCourse from "../PopularCourse/PopularCourse";
import FooterBanner from '../FooterBanner/FooterBanner';
import Pricing from "../Pricing/Pricing";
import Banner from "../Banner/Banner";

const Home = () => {
  return <Box>
    <Banner />
    <PopularCourse />
    <CourseSlider />
    <OnlineCourse />
    <Event />
    <Pricing />
    <FooterBanner />
  </Box>;
};

export default Home;