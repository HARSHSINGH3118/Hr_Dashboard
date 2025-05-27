"use client";

import { useEffect, useState } from "react";
import { assignDepartment, assignRating } from "@/lib/employeeUtils";
import DepartmentChart from "@/components/DepartmentChart";
import BookmarkTrend from "@/components/BookmarkTrend";
import { useBookmarks } from "@/context/BookmarkContext";

function AnalyticsContent() {
  const [users, setUsers] = useState([]);
  const { bookmarkedUsers } = useBookmarks();

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=20")
      .then((res) => res.json())
      .then((data) => {
        const enriched = data.users.map((user) => ({
          ...user,
          department: assignDepartment(),
          rating: assignRating(),
        }));
        setUsers(enriched);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
        setUsers([]);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
        📊 Analytics Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded h-[350px]">
          <h2 className="text-md font-medium mb-2 text-gray-700 dark:text-gray-200">
            Department-wise Performance
          </h2>
          {users.length > 0 ? (
            <DepartmentChart users={users} />
          ) : (
            <p className="text-gray-500">Loading department chart...</p>
          )}
        </div>

        {/* Line Chart */}
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded h-[350px]">
          <h2 className="text-md font-medium mb-2 text-gray-700 dark:text-gray-200">
            Bookmark Trends
          </h2>
          <BookmarkTrend
            totalUsers={users.length}
            bookmarkedCount={bookmarkedUsers.length}
          />
        </div>
      </div>
    </div>
  );
}

export default function AnalyticsPage() {
  return <AnalyticsContent />;
}
