import React, { useEffect, useState } from "react";
import HomeBox from "../../Components/HomeBox";
import { PieChart } from "../../Components/PieChart";
import { LineGraph } from "../../Components/LineGraph";
import { TopItemCategories } from "../../Components/Categories/TopItemsCategories";
import { StockNumbers } from "../../Components/StockNo/StockNumbers";
import { StoreList } from "../../Components/StoreList/StoreList";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalRequests: 0,
    scheduledVisits: 0,
    approvedQuotes: 0,
    pendingRequests: 0,
    newCustomers: 0,
  });

  useEffect(() => {
  const countStats = async () => {

    try {
      const res = await axios.get("http://localhost:3000/post/countPost");
      setStats(res.data);
    } catch (error) {
      console.log("error fetching stats:", error);
    }
  };

  countStats();
}, []);


  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold ml-4 text-primary font-arial">
          Recent activity
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4 font-poppins mt-4">
        <HomeBox Quantity={stats.totalRequests} title="Total Requests" />
        <HomeBox Quantity={stats.scheduledVisits} title="Scheduled Visits" />
        <HomeBox
          Quantity={`Rs ${stats.approvedQuotes}`}
          title="Approved Quotes"
        />
        <HomeBox Quantity={stats.pendingRequests} title="Pending Requests" />
        <HomeBox Quantity={stats.newCustomers} title="New Customers" />
      </div>

      {/* Graphs */}
      <section className="my-10 md:flex md:justify-center md:items-center gap-28">
        <PieChart />
        <LineGraph />
      </section>

      <section className="my-10 gap-6 flex flex-col md:flex-row justify-center items-center">
        <TopItemCategories />
        <StockNumbers />
        <StoreList />
      </section>
    </>
  );
};

export default AdminDashboard;
