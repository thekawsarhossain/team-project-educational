import React from "react";
import Footer from "../../Shared/Footer/Footer";
import CourseSlider from "../CourseSlider/CourseSlider";
import PopularCourse from "../PopularCourse/PopularCourse";

const Home = () => {
  return <div>
    <h1>Home</h1>
    <PopularCourse/>
    <CourseSlider/>
    <Footer/>
  </div>;
};

export default Home;
