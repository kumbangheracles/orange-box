"use client";
import useDeviceType from "@/hooks/useDeviceType";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useView from "@/hooks/useView";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);
const Temperature = () => {
  const isMobile = useDeviceType();
  // const { isLG, isMD, isSM, isXL, isXSM, isESM } = listView();
  const { isXSM } = useView();
  const chartData = {
    labels: Array.from({ length: isMobile ? 5 : 10 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Views",
        data: [
          650, 550, 600, 300, 250, 100, 150, 250, 300, 390, 650, 500, 400, 350,
        ],
        borderColor: "#dd0303",
        backgroundColor: "rgba(221, 3, 3, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: isXSM ? 3 : 5,
        pointHoverRadius: 6,
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => `Views: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        border: {
          display: true,
          width: 2,
          color: "black",
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: "rgba(0,0,0,0.1)",
        },
        border: {
          display: true,
          width: 2,
          color: "black",
        },
      },
    },
  };

  return (
    <div className="sm:w-[70%] w-full p-7 bg-white border-2 border-orange-400 h-[394px] sm:h-full rounded-lg">
      <h4>Temperature</h4>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Temperature;
