import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BlogDetails from "./Components/Blog/BlogDetails";
import Login from "./Components/Login/Login.tsx";
import { UserProvider } from "./Contexts/Role/UserContext.tsx";
import PrivateRoute from "./Components/Auth/PrivateRoute.tsx";
import Layout from "./Components/Layout/Layout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="blog" element={<App />} />
          <Route path="blog/:id" element={<BlogDetails />} />
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
