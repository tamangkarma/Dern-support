import React from 'react'
import SchedulePage from './Home/Booking/userBooking'
import AdminPanel from './Home/Booking/adminBookingTable';

const Scheduling = () => {
  const user = localStorage.getItem("user");
  const userparse  = JSON.parse(user);
  const roleuser = userparse.Role.roleName;
  return (
    <div>
      {roleuser === "Admin" ? (
        <AdminPanel/>
      ): (
        <SchedulePage/>
      )}
    </div>
  )
}

export default Scheduling
