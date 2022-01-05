import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Redux/slices/blogSlice";
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
    <h1>Blog is coming</h1>
  </div>;
};

export default Blogs;
