import React from "react";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/User/UserContext";
import { User } from "../Blog/types";
const Layout = () => {
  const navigate: NavigateFunction = useNavigate();
  const { user, setUser } = React.useContext(UserContext);
  const loggedInUser: User = JSON.parse(localStorage.getItem("user"));
  React.useEffect((): void => {
    if (loggedInUser) {
      setUser(loggedInUser);
      navigate("/blog");
    }
  }, []);

  const handleClick = (): void => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <div className="text-center p-4 bg-green-500 text-white font-semibold relative">
        <h1>Blogs</h1>
        {user && user.email !== undefined && (
          <button
            onClick={handleClick}
            className="px-3 mr-1 text-white py-2 border border-red-500 border-1 font-semibold rounded-lg shadow-md bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-75 absolute top-1 right-2"
          >
            Logout
          </button>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
