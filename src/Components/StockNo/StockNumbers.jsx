import { FiBox } from "react-icons/fi";
import { stockNumbers } from "./Stock";


export const StockNumbers = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-full sm:max-w-sm md:max-w-md">
      <h2 className="flex items-center text-base md:text-lg font-semibold mb-4">
        <FiBox className="mr-2" /> Stock numbers
      </h2>

      <ul className="space-y-2 text-sm md:text-base">
        {stockNumbers.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span className={index === 0 ? "text-purple-600" : ""}>
              {item.label}
            </span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
