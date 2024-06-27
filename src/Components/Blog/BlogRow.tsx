import React from "react";
import Action from "../Utils/Action";
import { Blog } from "./types";
import { UserContext } from "../../Contexts/User/UserContext";
import { useNavigate } from "react-router-dom";

const BlogRow: React.FC<Blog> = ({ blog }) => {
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();
  const handleViewClick = (): void => {
    navigate("/blog/" + blog.id);
  };
  const handleEditBlog = (): void => {
    navigate("/add-blog?id=" + blog.id);
  };
  const handleDeleteClick = async (): Promise<void> => {
    const confirmation = confirm("Do you want to delete this blog?");
    if (confirmation) {
      const response = await fetch("http://localhost:3000/blog/" + blog.id, {
        method: "DELETE",
      });
      const json = await response.json();
      console.log(json);
    }
  };

  return (
    <div className="flex items-center justify-between p-3 border border-green-500 bg-gray-200">
      <p className="mr-5">{blog?.content?.slice(0, 50)}...</p>
      <div>
        <Action handleClick={handleViewClick} text="View" />
        {user.role === "admin" || user.role === "manager" ? (
          <Action handleClick={handleEditBlog} text="Edit" />
        ) : (
          ""
        )}
        {user.role == "admin" ? (
          <Action handleClick={handleDeleteClick} text="Delete" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BlogRow;
