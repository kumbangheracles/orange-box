"use client";
import useDeviceType from "@/hooks/useDeviceType";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import listView from "@/lib/listView";
import { Bar } from "react-chartjs-2";
import useView from "@/hooks/useView";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
const Temperature = () => {
  const isMobile = useDeviceType();
  // const { isLG, isMD, isSM, isXL, isXSM, isESM } = listView();
  const { isXSM, isESM, isSM, isMD, isLG, isXL } = useView();
  const chartData = {
    labels: Array.from({ length: isMobile ? 5 : 10 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Views",
        data: [
          650, 550, 600, 300, 250, 100, 150, 250, 300, 390, 650, 500, 400, 350,
        ],
        backgroundColor: "#dd0303",
        borderRadius: 4,
        barThickness: isXSM
          ? 25
          : isESM
          ? 30
          : isSM
          ? 30
          : isMD
          ? 20
          : isXL
          ? 50
          : 50,
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
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawOnChartArea: false,
        },

        border: {
          display: true,
          width: 2,
          color: "black",
        },
        drawTicks: true,
        offSetGridLines: true,
      },
      y: {
        display: true,
        beginAtzero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: true,
          drawOnChartArea: false,
          color: "black",
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
    <div className="sm:w-[70%] w-full p-7 bg-white h-[394px] sm:h-full rounded-lg">
      <h4>Temperature</h4>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default Temperature;
