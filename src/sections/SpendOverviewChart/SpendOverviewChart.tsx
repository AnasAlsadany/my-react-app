import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import SharedCard from "../../@shared/SharedCard"; 

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const chartData = {
  labels: ["02:00AM", "04:00AM", "06:00AM", "08:00AM", "10:00AM", "12:00PM"],
  datasets: [
    {
      label: "Spend",
      data: [2000, 3000, 1800, 4000, 3200, 5000],
      borderColor: "#00FF99",
      backgroundColor: "rgba(0,255,153,0.1)",
      tension: 0.4,
      fill: true,
    },
  ],
};

export default function SpendOverviewChart() {
  return (
    <SharedCard title="Spend Overview">
      <div className="d-flex justify-content-end align-items-end mb-3">
        <span className="me-3 fw-bold">Daily</span>
        <span className="me-3">Weekly</span>
        <span className="me-3">Monthly</span>
        <span>Yearly</span>
      </div>
      <Line data={chartData} />
    </SharedCard>
  );
}
