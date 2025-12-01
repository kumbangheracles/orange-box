"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { cn } from "@/lib/cn";
ChartJS.register(ArcElement, Tooltip, Legend);

interface PropTypes {
  jenisSampah?: "organik" | "anorganik";
  dummyData: Record<string, number>;
  selectedDate: string;
}

const TotalAmount = ({ jenisSampah, dummyData, selectedDate }: PropTypes) => {
  const currentAmount = dummyData[selectedDate];
  const integerAmount = Math.floor(currentAmount);

  const data = {
    labels: jenisSampah === "organik" ? ["Organik"] : ["Anorganik"],
    datasets: [
      {
        label: "Percentage",
        data: [currentAmount, 100 - currentAmount],
        backgroundColor: [
          jenisSampah === "organik" ? "#61B852" : "#1E90FF",
          "#ffffff",
        ],
        borderColor: ["#000000"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "50%",
    plugins: { legend: { display: false }, title: { display: false } },
  };

  return (
    <div className="p-7 sm:p-1 bg-white rounded-md border-2 border-orange-400 w-full flex items-center flex-col justify-center gap-3 h-full relative">
      <h4
        className={`!font-bold absolute sm:left-5 sm:top-5 sm:text-5xl left-5 top-5 text-2xl ${cn(
          jenisSampah === "organik" ? "text-[#61B852]" : "text-[#1E90FF]"
        )}`}
      >
        {integerAmount}%
      </h4>

      <div className="flex justify-center items-center h-[200px] sm:h-[300px]">
        <Doughnut data={data} options={options} />
      </div>

      <span
        className="font-bold text-sm sm:text-base tracking-wider"
        style={{ color: jenisSampah === "organik" ? "#61B852" : "#1E90FF" }}
      >
        {jenisSampah === "organik" ? "Organik" : "Anorganik"}
      </span>
    </div>
  );
};

export default TotalAmount;
