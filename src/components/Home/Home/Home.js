import React from "react";
import CourseSlider from "../CourseSlider/CourseSlider";
import OnlineCourse from "../OnlineCourse/OnlineCourse";
import PopularCourse from "../PopularCourse/PopularCourse";

const Home = () => {
  return <div>
    <PopularCourse />
    <CourseSlider />
    <OnlineCourse />
  </div>;
};

export default Home;