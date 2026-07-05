import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function Charts() {
  const pieData = {
    labels: ["Online", "Offline"],
    datasets: [
      {
        data: [110, 10],
        backgroundColor: [
          "#22c55e",
          "#ef4444",
        ],
      },
    ],
  };

  const barData = {
    labels: [
      "Main",
      "City",
      "Mall",
      "Airport",
      "University",
    ],
    datasets: [
      {
        label: "Cash %",
        data: [80, 20, 55, 90, 35],
        backgroundColor: "#2563eb",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <div className="bg-white rounded-lg shadow p-5">
        <h2 className="text-xl font-bold mb-4">
          ATM Status
        </h2>

        <Pie data={pieData} />
      </div>

      <div className="bg-white rounded-lg shadow p-5">
        <h2 className="text-xl font-bold mb-4">
          Cash Level
        </h2>

        <Bar data={barData} />
      </div>
    </div>
  );
}