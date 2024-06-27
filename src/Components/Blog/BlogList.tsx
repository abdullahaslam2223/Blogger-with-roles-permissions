import React from "react";
import BlogRow from "./BlogRow";
import { Blog } from "./types";
import Action from "../Utils/Action";
import { UserContext } from "../../Contexts/User/UserContext";
import { useNavigate } from "react-router-dom";

const BlogList: React.FC = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext);
  console.log("Role ", user);
  const [blogs, setBlogs] = React.useState<Blog[] | null>(null);
  const handleAddBlog = () => {
    navigate("/add-blog");
  };

  async function fetchBlogs() {
    const response = await fetch("http://localhost:3000/blog");
    const data = await response.json();
    setBlogs(data);
  }

  React.useEffect(() => {
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
