import React from 'react'
import AdminSidebar from './adminSidebar';
import UserSidebar from './userSidebar';

const MainSidebar = () => {
    const user = localStorage.getItem("user");
  const userparse  = JSON.parse(user);
  const roleuser = userparse.Role.roleName;
  return (
    <div>
      {roleuser === "Admin" ? (
        <AdminSidebar/>
      ): (
        <UserSidebar/>
      )}
    </div>
  )
}

export default MainSidebar
