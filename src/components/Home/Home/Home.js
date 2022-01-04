import React from "react";
import CourseSlider from "../CourseSlider/CourseSlider";
import Event from "../Event/Event";
import OnlineCourse from "../OnlineCourse/OnlineCourse";
import PopularCourse from "../PopularCourse/PopularCourse";
import Pricing from "../Pricing/Pricing";

const Home = () => {
  return <div>
    <PopularCourse />
    <CourseSlider />
    <OnlineCourse />
    <Pricing/>
    <Event />
  </div>;
};

export default Home;