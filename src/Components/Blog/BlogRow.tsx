import React from "react";
import Action from "../Utils/Action";
import { Blog } from "./types";
import { RoleContext } from "../../Contexts/Role/RoleContext";
import { useNavigate } from "react-router-dom";

const BlogRow: React.FC<Blog> = ({ blog }) => {
  const { role, setRole } = React.useContext(RoleContext);
  setRole("admin");
  const navigate = useNavigate();
  const handleViewClick = () => {
    navigate("/blog/" + blog.id);
  };

  return (
    <div className="flex items-center justify-between p-3 border border-green-500 bg-gray-200">
      <p className="mr-5">{blog?.content?.slice(0, 50)}...</p>
      <div>
        <Action handleClick={handleViewClick} text="View" />
        {role === "admin" || role === "manager" ? (
          <Action handleClick={() => {}} text="Edit" />
        ) : (
          ""
        )}
        {role == "admin" ? <Action handleClick={() => {}} text="Delete" /> : ""}
      </div>
    </div>
  );
};

export default BlogRow;
