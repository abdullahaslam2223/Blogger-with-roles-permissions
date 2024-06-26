import React from "react";
import Action from "../Utils/Action";
import { Blog } from "./types";

const BlogRow: React.FC<Blog> = ({ blog }) => {
  return (
    <div className="flex items-center justify-between p-3 border border-green-500 bg-gray-200 cursor-pointer just">
      <p className="mr-5">{blog?.content?.slice(0, 50)}...</p>
      <div>
        <Action text="View" />
        <Action text="Edit" />
        <Action text="delete" />
      </div>
    </div>
  );
};

export default BlogRow;
