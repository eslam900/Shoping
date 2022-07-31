import React, { Fragment } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SlidBlog from "../component/SlidBlog";
import BlogCard from "../component/BlogCard";

const Blog = () => {
  return (
    <Fragment>
      <Header />
      <SlidBlog />
      <BlogCard />
      <Footer />
    </Fragment>
  );
};

export default Blog;
