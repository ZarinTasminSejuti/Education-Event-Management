import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import AboutUs from "../pages/AboutUs";
import ErrorPage from "../pages/ErrorPage";
import Events from "../pages/events/Events";
import Footer from "../pages/Footer";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Checkout from "../pages/payment/Checkout";
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
          loader: () => fetch('/service.json')
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/about",
          element: <AboutUs></AboutUs>,
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
          path: "/checkout",
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        },
        {
          path: "/services/:id",
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: () => fetch('/service.json')
        },
        {
          path: "/footer",
          element: <Footer></Footer>,
        }
      ]
    },
]);
  
export default router;