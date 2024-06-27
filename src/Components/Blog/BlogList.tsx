import React from "react";
import BlogRow from "./BlogRow";
import { Blog } from "./types";
import Action from "../Utils/Action";
import { useNavigate, NavigateFunction } from "react-router-dom";

const BlogList: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const [blogs, setBlogs] = React.useState<Blog[] | null>(null);
  const handleAddBlog = (): void => {
    navigate("/add-blog");
  };

  async function fetchBlogs(): Promise<void> {
    const response = await fetch("http://localhost:3000/blog");
    const data = await response.json();
    setBlogs(data);
  }

  React.useEffect((): void => {
    fetchBlogs();
  }, []);

  return (
    <div className="w-1/2 mx-auto py-10">
      <Action handleClick={handleAddBlog} text="Add Blog" />
      <div className="mt-1">
        {blogs && blogs.map((blog) => <BlogRow key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
};

export default BlogList;
