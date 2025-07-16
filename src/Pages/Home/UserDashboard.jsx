import React from 'react'

const UserDashboard = () => {
   const user = localStorage.getItem("user");
  const userparse  = JSON.parse(user);
  return (
     <div className="p-6">
      <h1 className="text-2xl font-bold  mb-4">Welcome Back! <span className='block ml-4 text-primary'>{userparse.firstName} {userparse.lastName}</span></h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Next Repair */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Upcoming Repair</h2>
          <p>No upcoming repairs. <a href="/scheduling" className="text-purple-600">Schedule Now</a></p>
        </div>

        {/* Open Requests */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Open Support Requests</h2>
          <p>No open request. <a href="/NewRequest" className="text-purple-600">View</a></p>
        </div>

        {/* Latest Quote */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Latest Quote</h2>
          <p>No new quotes yet. <a href="/quotes" className="text-purple-600">Check Quotes</a></p>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
