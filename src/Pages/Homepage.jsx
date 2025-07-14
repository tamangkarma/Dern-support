import React, { useEffect, useState } from "react";
import HomeBox from "../Components/HomeBox";
import { PieChart } from "../Components/PieChart";
import { TopItemCategories } from "../Components/Categories/TopItemsCategories";
import { StockNumbers } from "../Components/StockNo/StockNumbers";
import { StoreList } from "../Components/StoreList/StoreList";
import { LineGraph } from "../Components/LineGraph";
import axios from "axios";

const Homepage = () => {
  const [stats, setStats] = useState({
    totalRequests: 0,
    scheduledVisits: 0,
    approvedQuotes: 0,
    pendingRequests: 0,
    newCustomers: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:3000/dashboard");
        setStats(res.data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchStats();
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
        <HomeBox Quantity={`Rs ${stats.approvedQuotes}`} title="Approved Quotes" />
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

export default Homepage;
