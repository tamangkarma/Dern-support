import HomeBox from "../Components/HomeBox";
import { PieChart } from "../Components/PieChart";
import { TopItemCategories } from "../Components/Categories/TopItemsCategories";
import { StockNumbers } from "../Components/StockNo/StockNumbers";
import { StoreList } from "../Components/StoreList/StoreList";
import { LineGraph } from "../Components/LineGraph";
import SchedulePage from "./Scheduling";

const Homepage = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold ml-4 text-primary font-arial">
          Recent activity
        </h1>
        <SchedulePage/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4 font-poppins mt-4">
        <HomeBox Quantity="740" title="New Items" />
        <HomeBox Quantity="33" title="New Orders" />
        <HomeBox Quantity="Rs 1,00,000" title="Refunds" />
        <HomeBox Quantity="5" title="Message" />
        <HomeBox Quantity="100" title="New Customers" />
      </div>
      
      {/* Graphs */}
      <section className="my-10 md:flex md:justify-center md:items-center gap-10">
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
