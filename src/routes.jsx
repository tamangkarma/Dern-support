import { createBrowserRouter } from "react-router";
import Mainlayout from "./layout/Mainlayout";
import Homepage from "./Pages/Homepage";
import Menu from "./Pages/Menu";
import Products from "./Pages/Products";
import Profile from "./Pages/Profile";
import Categories from "./Pages/Categories";

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
                path: "/menu",
                element: <Menu/>,
            },
            {
                path: "/products",
                element: <Products/>,
            },
            {
                path: "/profile",
                element: <Profile/>,
            },
            {
                path:"/category",
                element: <Categories/>
            }
        ]
    }
])