export const pieChartData = {
  labels: [
    "Screen Repairs",
    "Battery Replacement",
    "Software Issues",
    "Hardware Upgrades",
    "Diagnostics Only"
  ],
  datasets: [
    {
      label: "Number of Jobs",
      data: [120, 90, 45, 30, 15],
      backgroundColor: [
        "#3C096C",   // Deep purple
        "#6f2dbd",   // Purple
        "#b79ced",   // Light purple
        "#C77DFF",   // Light violet
        "#E0AAFF",   // Light lilac
      ],
      borderWidth: 2,
      borderColor: "#fff",
      hoverOffset: 4,
    },
  ],
};
