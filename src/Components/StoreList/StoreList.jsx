import { FiMapPin } from "react-icons/fi";
import { stores } from "./stores";

export const StoreList = () => {

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-full sm:max-w-sm md:max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="flex items-center text-base md:text-lg font-semibold">
          <FiMapPin className="mr-2" /> Stores list
        </h2>
        <button className="text-sm text-purple-600">View all</button>
      </div>
      <ul className="space-y-2 text-sm md:text-base">
        {stores.map((store, index) => (
          <li key={index} className="flex flex-col sm:flex-row sm:justify-between">
            <span className="font-medium">{store.name}</span>
            <span className="text-gray-600 sm:text-right">
              {store.employees} emp • {store.items} items • {store.orders} orders
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
