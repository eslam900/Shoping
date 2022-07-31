import React from "react";
import { BlogData } from "../data/data.js";
import CardBlog from "./CardBlog";

const BlogCard = () => {
  return (
    <div className="container d-flex flex-wrap justify-content-center">
      {BlogData.map((el, idx) => (
        <CardBlog el={el} key={idx} />
      ))}
    </div>
  );
};

export default BlogCard;
