import { createBrowserRouter } from "react-router";
import Mainlayout from "./layout/Mainlayout";
import Homepage from "./Pages/Homepage";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import Stores from "./Pages/Stores";
import Settings from "./Pages/Settings";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  //Public Routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  //Private Routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Mainlayout />,
        children: [
          {
            path: "/",
            element: <Homepage />,
          },
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/categories",
            element: <Categories />,
          },
          {
            path: "/stores",
            element: <Stores />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);
