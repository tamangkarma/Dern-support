import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { lineGraphData } from "../Data/lineGraph";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineGraph = () => {
  const options = {
    responsive: true, 
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
    },
      title: {
        display: true,
        text: "Monthly Sales Performance",
        color: "#6D28D9",
        font: {
          size: 18,
        }, 
    },
    },
    scales: {
      x: {
        ticks: {
          color: "#555",
        },
      },
      y: {
        ticks: {
          color: "#555",
        },
      },
    },
  };

  return (
    <div className="w-full max-w-full md:max-w-4xl h-[400px] sm:h-[400px] md:h-[450px] lg:h-[500px] p-4 bg-white rounded-xl shadow-md">
      <Line options={options} data={lineGraphData} />
    </div>
  );
};
