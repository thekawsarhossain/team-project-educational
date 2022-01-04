import React from "react";
import CourseSlider from "../CourseSlider/CourseSlider";
import Event from "../Event/Event";
import OnlineCourse from "../OnlineCourse/OnlineCourse";
import PopularCourse from "../PopularCourse/PopularCourse";

const Home = () => {
  return <div>
    <PopularCourse />
    <CourseSlider />
    <OnlineCourse />
    <Event />
  </div>;
};

export default Home;