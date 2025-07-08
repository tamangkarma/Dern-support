import { createBrowserRouter } from "react-router";
import Mainlayout from "./layout/Mainlayout";
import Homepage from "./Pages/Homepage";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import Stores from "./Pages/Stores";
import Settings from "./Pages/Settings";
import Profile from "./Pages/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children: [
            {
                path: "/",
                element: <Homepage/>,
            },
            {
                path: "/products",
                element: <Products/>,
            },
            {
                path: "/categories",
                element: <Categories/>,
            },
            {
                path: "/stores",
                element: <Stores/>,
            },
            {
                path:"/settings",
                element: <Settings/>,
            },
            {
                path: "/profile",
                element: <Profile/>,
            }
        ]
    }
])