import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Events from "../pages/events/Events";
import Footer from "../pages/Footer";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
    element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/events",
          element: <PrivateRoute><Events></Events></PrivateRoute>,
        },
        {
          path: "/serviceDetails",
          element: <ServiceDetails></ServiceDetails>,
        },
        {
          path: "/footer",
          element: <Footer></Footer>,
        }
      ]
    },
]);
  
export default router;