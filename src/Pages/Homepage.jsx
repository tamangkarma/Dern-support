import AdminDashboard from "../Pages/Home/AdminDashboard"
import UserDashboard from "../Pages/Home/UserDashboard"


const Homepage = () => {
  const user = localStorage.getItem("user");
  const userparse  = JSON.parse(user);
  const roleuser = userparse.Role.roleName;
  return (
    <div>
      {roleuser === "Admin" ? (
        <AdminDashboard/>
      ): (
        <UserDashboard/>
      )}
    </div>
  )
}

export default Homepage




