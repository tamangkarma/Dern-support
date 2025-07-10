// 

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Title, Legend, ArcElement, plugins } from "chart.js";
import { pieChartData } from "../Data/pieChart";

ChartJS.register(Tooltip, Title, Legend, plugins, ArcElement);

export const PieChart = () => {
  const options = {
responsive: true,
plugins: {
  legend: {
    position: "bottom",
  },
  title: {
    display: true,
    text: "Sales by Product Category",
    position: "top",
    font: {
      size: 18,
      weight: "bold",
    },
    color: "#6D28D9",
  }
}
  };

  return( 
  <div className="w-full max-w-md h-96">
    <Pie options={options} data={pieChartData} />

  </div>
) 
};