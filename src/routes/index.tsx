import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Profile from "../pages/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <>
        <ToastContainer></ToastContainer>
        <Login></Login>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <ToastContainer></ToastContainer>
        <Register></Register>
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <ToastContainer></ToastContainer>
        <Home></Home>
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <ToastContainer></ToastContainer>
        <Profile></Profile>
      </>
    ),
  },
]);
