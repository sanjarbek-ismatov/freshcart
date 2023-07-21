"use client";
import "./Chart.css";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { OrderUsableType } from "@types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function Chart({ orders }: { orders?: OrderUsableType[] }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const labels = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  const stats = labels.map((e, i) => {
    const currentDate = new Date();
    const firstDate = new Date(currentDate.getFullYear(), i, 1);
    const lastDate = new Date(currentDate.getFullYear(), i + 1, 1);
    lastDate.setTime(lastDate.getTime() - 1);
    return orders?.filter((e) => {
      const convertedDate = new Date(e.date).getTime();
      return (
        firstDate.getTime() <= convertedDate &&
        convertedDate <= lastDate.getTime()
      );
    }).length;
  });
  console.log(stats);
  const data = {
    labels,
    datasets: [
      {
        label: "Buyurtmalar",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Sotilishlar",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line data={data} options={options} />;
}

export default Chart;
