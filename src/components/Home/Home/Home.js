import React from "react";
import OnlineCourse from "../OnlineCourse/OnlineCourse";
import CourseSlider from "../CourseSlider/CourseSlider";
import PopularCourse from "../PopularCourse/PopularCourse";

const Home = () => {
  return <div>
   
    <PopularCourse/>
   <CourseSlider/>
    <OnlineCourse />
   
  </div>;
};

export default Home;
