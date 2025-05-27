"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DepartmentChart({ users }) {
  if (!users || users.length === 0) {
    return <p className="text-gray-500">Loading...</p>;
  }

  const departmentStats = {};
  users.forEach((user) => {
    const dept = user.department;
    if (!departmentStats[dept]) {
      departmentStats[dept] = { total: 0, count: 0 };
    }
    departmentStats[dept].total += user.rating;
    departmentStats[dept].count += 1;
  });

  const labels = Object.keys(departmentStats);
  const avgRatings = labels.map(
    (dept) => departmentStats[dept].total / departmentStats[dept].count
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Average Rating",
        data: avgRatings,
        backgroundColor: "#3b82f6", // Tailwind blue-500
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
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

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
