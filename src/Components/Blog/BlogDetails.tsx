import React from "react";
import { useParams } from "react-router-dom";
import { Blog } from "./types";

const BlogDetails: React.FC = () => {
  const [blog, setBlog] = React.useState<Blog | null>(null);
  const { id } = useParams();
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/blog/" + id);
    const json = await response.json();
    setBlog(json);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-3/4 mx-auto p-5 bg-gray-200">
      <div className="flex items-center mb-5">
        <h1 className="font-bold text-lg text-green-500 mr-5">{blog?.title}</h1>
        <h3 className="bg-green-500 text-sm p-1 rounded-lg">{blog?.author}</h3>
      </div>
      <p>{blog?.content}</p>
    </div>
  );
};

export default BlogDetails;
