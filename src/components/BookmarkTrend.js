"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
);

export default function BookmarkTrend({ totalUsers, bookmarkedCount }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const labels = Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`);
    const data = labels.map(() =>
      Math.floor(Math.random() * (bookmarkedCount + 1))
    );

    setChartData({
      labels,
      datasets: [
        {
          label: "Bookmarked Users",
          data,
          fill: true,
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderColor: "#3b82f6",
          pointBackgroundColor: "#3b82f6",
          tension: 0.4,
        },
      ],
    });
  }, [bookmarkedCount]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#6b7280",
        },
      },
    },
  };

  if (!chartData) return <p className="text-gray-500">Loading...</p>;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line data={chartData} options={options} />
    </div>
  );
}
