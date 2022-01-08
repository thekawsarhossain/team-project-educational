import { Box } from "@mui/system";
import React from "react";
import CourseSlider from "../CourseSlider/CourseSlider";
import Event from "../Event/Event";
import OnlineCourse from "../OnlineCourse/OnlineCourse";
import PopularCourse from "../PopularCourse/PopularCourse";
import FooterBanner from '../FooterBanner/FooterBanner';
import Pricing from "../Pricing/Pricing";
import Banner from "../Banner/Banner";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
  return <Box>
    <Navigation />
    <Banner />
    <PopularCourse />
    <CourseSlider />
    <OnlineCourse />
    <Event />
    {/* <Pricing /> */}
    <FooterBanner />
    <Footer />
  </Box>;
};

export default Home;