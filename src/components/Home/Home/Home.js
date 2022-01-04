import React from "react";
import Footer from "../../Shared/Footer/Footer";
import CourseSlider from "../CourseSlider/CourseSlider";
import PopularCourse from "../PopularCourse/PopularCourse";

const Home = () => {
  return <div>
   
    <PopularCourse/>
    <CourseSlider/>
    <Footer/>
  </div>;
};

export default Home;
