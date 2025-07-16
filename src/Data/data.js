import {
  RiHome2Line,
  RiShoppingBagLine,
  RiCalendarLine,
  RiFileListLine,
  RiSettings3Line,
} from "react-icons/ri";
import { RxExit } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

export const Nav = [
  {
    title: "Home",
    url: "/",
    icon: RiHome2Line,
  },
  {
    title: "New Request",
    url: "/newrequest",
    icon: RiShoppingBagLine,
  },
  {
    title: "Quotes",
    url: "/quotes",
    icon: RiFileListLine,
  },
  {
    title: "Scheduling",
    url: "/scheduling",
    icon: RiCalendarLine, 
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



export const Navbar = [
  {
    title: "Home",
    url: "/",
    icon: RiHome2Line,
  },
  {
    title: "Quotes",
    url: "/quotes",
    icon: RiFileListLine,
  },
  {
    title: "Scheduling",
    url: "/scheduling",
    icon: RiCalendarLine, 
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