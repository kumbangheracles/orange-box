"use client";
import { Card } from "antd";
import { Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const TotalAmount = () => {
  const data = {
    labels: ["Organik", "Anorganik", "B3"], // label kategori
    datasets: [
      {
        label: "Jenis Sampah",
        data: [45, 30, 25], // persentase masing-masing kategori
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // hijau muda
          "rgba(255, 205, 86, 0.6)", // kuning
          "rgba(255, 99, 132, 0.6)", // merah muda
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Opsi chart
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
    <div className="p-7 bg-white rounded-md border-2 border-orange-400 w-full h-full lg:w-[30%] overflow-hidden">
      <h4>Total Amount</h4>
      <div className="flex justify-center items-center h-[200px] sm:h-[300px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalAmount;
