import AdminDashboard from "../Pages/Home/AdminDashboard"
import UserDashboard from "../Pages/Home/UserDashboard"


const Homepage = () => {
  const user = localStorage.getItem("user");
  const userparse  = JSON.parse(user);
  const roleuser = userparse.Role.roleName;
  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-4">Welcome {userparse.firstName} {userparse.lastName} </h1>
      {roleuser === "Admin" ? (
        <AdminDashboard/>
      ): (
        <UserDashboard/>
      )}
    </div>
  )
}

export default Homepage




