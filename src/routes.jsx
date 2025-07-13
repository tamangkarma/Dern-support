import { createBrowserRouter } from "react-router";
import Mainlayout from "./layout/Mainlayout";
import Homepage from "./Pages/Homepage";
import Settings from "./Pages/Settings";
import Profile from "./Pages/Profile";
import NewRequest from "./Pages/NewRequest";
import SchedulePage from "./Pages/Scheduling";
import { Quotes } from "./Pages/Quotes";
// import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";
// import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  //Public Routes
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
  

  //Private Routes
  // {
  //   element: <ProtectedRoute />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Mainlayout />,
  //       children: [
  //         {
  //           path: "/",
  //           element: <Homepage />,
  //         },
  //         {
  //           path: "/settings",
  //           element: <Settings />,
  //         },
  //         {
  //           path: "/profile",
  //           element: <Profile />,
  //         },
  //       ],
  //     },
  //   ],
  // },

    {
    path: "/",
    element: <Mainlayout />,
    
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/newrequest",
        element: <NewRequest/>,
      },
      {
        path: "/scheduling",
        element: <SchedulePage/>,
      },
      {
        path: "/quotes",
        element: <Quotes/>,
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

]);
