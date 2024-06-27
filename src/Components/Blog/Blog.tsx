import React from "react";
import BlogList from "./BlogList";

const Blog = (): React.FC => {
  return (
    <>
      <div className="bg-gray-100">
        <BlogList />
      </div>
    </>
  );
};

export default Blog;
