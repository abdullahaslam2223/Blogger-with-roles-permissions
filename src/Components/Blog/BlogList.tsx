import React from "react";
import BlogRow from "./BlogRow";
import { Blog } from "./types";

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = React.useState<Blog[] | null>(null);

  async function fetchBlogs() {
    const response = await fetch("http://localhost:3000/blogs");
    const data = await response.json();
    setBlogs(data);
  }

  console.log(blogs);

  React.useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="w-1/2 mx-auto py-10">
      {blogs && blogs.map((blog) => <BlogRow key={blog.id} blog={blog} />)}
    </div>
  );
};

export default BlogList;
