export const lineGraphData = {
  labels: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ],
  datasets: [
    {
      label: "2025 Jobs Completed",
      data: [50, 60, 55, 70, 80, 90, 85, 88, 95, 100, 105, 110],
      borderColor: "#6f2dbd",
      backgroundColor: "rgba(111, 45, 189, 0.1)",
      tension: 0.4,
    },
    {
      label: "2024 Jobs Completed",
      data: [40, 50, 48, 60, 65, 72, 70, 68, 75, 80, 85, 90],
      borderColor: "#C77DFF",
      backgroundColor: "rgba(199, 125, 255, 0.1)",
      tension: 0.4,
    },
  ],
};
