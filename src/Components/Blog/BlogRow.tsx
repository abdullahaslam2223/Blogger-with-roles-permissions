import React from "react";
import Action from "../Utils/Action";
import { Blog } from "./types";
import { RoleContext } from "../../Contexts/Role/RoleContext";

const BlogRow: React.FC<Blog> = ({ blog }) => {
  const { role, setRole } = React.useContext(RoleContext);

  setRole("admin");
  // console.log("role", role);

  return (
    <div className="flex items-center justify-between p-3 border border-green-500 bg-gray-200 cursor-pointer just">
      <p className="mr-5">{blog?.content?.slice(0, 50)}...</p>
      <div>
        <Action text="View" />
        <Action text="Edit" />
        {role == "admin" ? <Action text="delete" /> : ""}
      </div>
    </div>
  );
};

export default BlogRow;
