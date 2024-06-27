import React from "react";
import BlogRow from "./BlogRow";
import { Blog } from "./types";
import Action from "../Utils/Action";
import { UserContext } from "../../Contexts/Role/UserContext";

const BlogList: React.FC = () => {
  const { user } = React.useContext(UserContext);
  console.log("Role ", user);
  const [blogs, setBlogs] = React.useState<Blog[] | null>(null);

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
      <Action handleClick={() => {}} text="Add Blog" />
      <div className="mt-1">
        {blogs && blogs.map((blog) => <BlogRow key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
};

export default BlogList;
