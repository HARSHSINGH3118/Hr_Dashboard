"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DepartmentChart({ users }) {
  const departments = ["HR", "Engineering", "Sales", "Marketing", "Finance"];

  const departmentData = departments.map((dept) => {
    const deptUsers = users.filter((u) => u.department === dept);
    const avgRating = deptUsers.length
      ? deptUsers.reduce((sum, u) => sum + u.rating, 0) / deptUsers.length
      : 0;
    return avgRating.toFixed(2);
  });

  const data = {
    labels: departments,
    datasets: [
      {
        label: "Avg Rating",
        data: departmentData,
        backgroundColor: "#3b82f6", // Tailwind blue-500
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e40af",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      y: {
        ticks: { color: "#64748b" },
        beginAtZero: true,
        max: 5,
      },
      x: {
        ticks: { color: "#64748b" },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 w-full">
      <h2 className="text-lg font-semibold mb-3">
        📊 Avg Rating by Department
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
}
