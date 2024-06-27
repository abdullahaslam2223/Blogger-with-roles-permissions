import React from "react";
import { UserContext } from "../../Contexts/User/UserContext";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute: React.FC = () => {
  const { user } = React.useContext(UserContext);
  return user && user.email !== undefined ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
