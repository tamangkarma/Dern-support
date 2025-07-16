import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "./Navbar";
import MainSidebar from "./mainSidebar";

const Mainlayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      {/* Navbar at the top */}
      <Navbar />

      {/* Sidebar and page content below Navbar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar on the left */}
        <MainSidebar />
        {/* Main content area */}
        <div className="flex flex-col flex-1 overflow-auto">
          <main className="flex-1 p-4">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
