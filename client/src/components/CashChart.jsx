import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CashChart() {
  const data = {
    labels: ["ATM 1", "ATM 2", "ATM 3", "ATM 4"],
    datasets: [
      {
        label: "Cash Remaining",
        data: [120000, 90000, 45000, 70000],
        backgroundColor: "rgba(54, 162, 235, 0.6)"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "ATM Cash Monitoring" }
    }
  };

  return <Bar data={data} options={options} />;
}