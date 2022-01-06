import React from 'react';
import { useSelector } from 'react-redux';
import './CourseDetails.css'
const CourseDetails = () => {

  const courseDetails = useSelector(state => state.courses.courseDetails);
  console.log(courseDetails)

  return (
    <div>
      <h1>Course details </h1>
    </div>
  );
};

export default CourseDetails;