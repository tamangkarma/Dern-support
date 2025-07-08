import { RiHome2Line, RiShoppingBagLine, RiGridLine, RiStore2Line, RiSettings3Line } from "react-icons/ri";
import { RxExit } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

export const Nav = [
  {
    title: "Home",
    url: "/",
    icon: RiHome2Line,
  },
  {
    title: "Products",
    url: "/products",
    icon: RiShoppingBagLine,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: RiGridLine,
  },
  {
    title: "Stores",
    url: "/stores",
    icon: RiStore2Line,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: RiSettings3Line,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: CgProfile,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: RxExit,
  },
];
