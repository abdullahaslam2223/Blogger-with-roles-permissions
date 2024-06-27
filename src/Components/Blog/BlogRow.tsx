import React from "react";
import Action from "../Utils/Action";
import { Blog } from "./types";
import { UserContext } from "../../Contexts/Role/UserContext";
import { useNavigate } from "react-router-dom";

const BlogRow: React.FC<Blog> = ({ blog }) => {
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();
  const handleViewClick = () => {
    navigate("/blog/" + blog.id);
  };

  return (
    <div className="flex items-center justify-between p-3 border border-green-500 bg-gray-200">
      <p className="mr-5">{blog?.content?.slice(0, 50)}...</p>
      <div>
        <Action handleClick={handleViewClick} text="View" />
        {user.role === "admin" || user.role === "manager" ? (
          <Action handleClick={() => {}} text="Edit" />
        ) : (
          ""
        )}
        {user.role == "admin" ? (
          <Action handleClick={() => {}} text="Delete" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BlogRow;
