import HomeBox from "../Components/HomeBox";
import TopItem from "../Components/SalesDashbboard/TopItem";
import Signup from "./Signup";

const Homepage = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold ml-4 font-arial">Recent activity</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4 font-poppins mt-4">
        <HomeBox
        Quantity="740"
        title="New Items"
        />
        <HomeBox
        Quantity="33"
        title="New Orders"
        />
        <HomeBox
        Quantity="Rs 1,00,000"
        title="Refunds"
        />
        <HomeBox
        Quantity="5"
        title="Message"
        />
        <HomeBox
        Quantity="100"
        title="New Customers"
        />
      </div>
      <TopItem/>
    </>
  );
};

export default Homepage;
