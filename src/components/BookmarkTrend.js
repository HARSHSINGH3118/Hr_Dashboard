"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BookmarkTrend({ totalUsers, bookmarkedCount }) {
  const notBookmarked = totalUsers - bookmarkedCount;

  const data = {
    labels: ["Bookmarked", "Not Bookmarked"],
    datasets: [
      {
        data: [bookmarkedCount, notBookmarked],
        backgroundColor: ["#facc15", "#94a3b8"], // yellow, slate
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { position: "bottom", labels: { color: "#64748b" } },
      tooltip: {
        backgroundColor: "#334155",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 w-full">
      <h2 className="text-lg font-semibold mb-3">📈 Bookmark Distribution</h2>
      <Pie data={data} options={options} />
    </div>
  );
}
