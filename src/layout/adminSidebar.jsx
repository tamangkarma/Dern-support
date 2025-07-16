import { NavLink, useNavigate } from "react-router";
import { Navbar } from "../Data/data";

const AdminSidebar = () => {
  const navigate = useNavigate();

  // ✅ Get user role from localStorage
  const user = localStorage.getItem("user");
  const parsedUser = user ? JSON.parse(user) : null;
  const role = parsedUser?.Role?.roleName;

  // ✅ Filter top items based on role
  const topItems = Navbar.filter((item) => {
    if (item.title === "Profile" || item.title === "Logout") return false;
    // Hide "Request" if Admin
    if (item.title === "Request" && role === "Admin") return false;
    return true;
  });

  const bottomItems = Navbar.filter(
    (item) => item.title === "Profile" || item.title === "Logout"
  );

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="h-screen bg-primary text-white w-16 md:w-48 p-4 rounded-tr-2xl rounded-br-2xl flex flex-col justify-between z-50">
      <div className="flex flex-col gap-1 mt-6">
        {topItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={index}
              to={item.url}
              className={({ isActive, isPending }) =>
                `flex items-center gap-2 p-3 rounded-2xl transition ${
                  isPending
                    ? "opacity-50"
                    : isActive
                    ? "bg-purple-900"
                    : "hover:bg-purple-800"
                }`
              }
            >
              {Icon && <Icon className="md:text-xl" />}
              <span className="hidden md:inline">{item.title}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="flex flex-col gap-1 mb-12">
        {bottomItems.map((item, index) => {
          const Icon = item.icon;

          if (item.title === "Logout") {
            return (
              <button
                key={index}
                onClick={handleLogout}
                className="flex items-center gap-2 p-3 rounded-2xl transition hover:bg-purple-800"
              >
                {Icon && <Icon className="md:text-xl" />}
                <span className="hidden md:inline">{item.title}</span>
              </button>
            );
          }

          return (
            <NavLink
              key={index}
              to={item.url}
              className={({ isActive, isPending }) =>
                `flex items-center gap-2 p-3 rounded-2xl transition ${
                  isPending
                    ? "opacity-50"
                    : isActive
                    ? "bg-purple-900"
                    : "hover:bg-purple-800"
                }`
              }
            >
              {Icon && <Icon className="md:text-xl" />}
              <span className="hidden md:inline">{item.title}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
