"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { cn } from "@/lib/cn";
ChartJS.register(ArcElement, Tooltip, Legend);

interface PropTypes {
  jenisSampah?: "organik" | "anorganik";
  dataAmount?: number;
}

const TotalAmount = ({ jenisSampah, dataAmount }: PropTypes) => {
  const data = {
    labels: jenisSampah === "organik" ? ["Organik"] : ["Anorganik"], // label kategori
    datasets: [
      {
        label: "Percentage",
        data: [25], // persentase masing-masing kategori
        backgroundColor: [jenisSampah === "organik" ? "#61B852" : "#1E90FF"],
        borderColor: [
          "#ffffff",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
        // circumference: 180,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Persentase Jenis Sampah",
      },
    },
  };

  return (
    <div
      className={` p-7 sm:p-1 bg-white rounded-md border-2 border-orange-400 w-full flex items-center flex-col justify-center gap-3 h-full  overflow-hidden relative`}
    >
      <h4
        className={`!font-bold absolute sm:left-10 sm:top-10 sm:text-5xl left-5 top-5 text-2xl ${cn(
          jenisSampah === "organik" ? "text-[#61B852]" : "text-[#1E90FF]"
        )}`}
      >
        {dataAmount}%
        {/* {jenisSampah === "organik" ? "Organik" : "Anorganik"} */}
      </h4>
      <div className="flex justify-center items-center h-[200px] sm:h-[300px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalAmount;
