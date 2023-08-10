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

  function getStats(data?: OrderUsableType[]) {
    return labels?.map((e, i) => {
      const currentDate = new Date();
      const firstDate = new Date(currentDate.getFullYear(), i, 1);
      const lastDate = new Date(currentDate.getFullYear(), i + 1, 1);
      lastDate.setTime(lastDate.getTime() - 1);
      return data?.filter((e) => {
        const convertedDate = new Date(e.date).getTime();
        return (
          firstDate.getTime() <= convertedDate &&
          convertedDate <= lastDate.getTime()
        );
      }).length;
    });
  }

  const ordersStats = getStats(orders);
  const sellsStats = getStats(orders?.filter((e) => e.status === "finished"));

  const data = {
    labels,
    datasets: [
      {
        label: "Buyurtmalar",
        data: ordersStats,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Sotilishlar",
        data: sellsStats,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line data={data} options={options} />;
}

export default Chart;
