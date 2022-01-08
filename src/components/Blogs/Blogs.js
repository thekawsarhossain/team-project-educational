import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Redux/slices/blogSlice";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./Blogs.css";

const Blogs = () => {

  // calling reducer to get data here 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  const blogs = useSelector(state => state.blogs.blogs);
  console.log(blogs)

  return <div>
    <Navigation />
    <h1>Blog is coming</h1>
    <Footer />
  </div>;
};

export default Blogs;
