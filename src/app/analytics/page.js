"use client";

import { useEffect, useState } from "react";
import { useBookmarks } from "@/context/BookmarkContext";
import DepartmentChart from "@/components/DepartmentChart";
import BookmarkTrend from "@/components/BookmarkTrend";
import { assignDepartment, assignRating } from "@/lib/employeeUtils";

export default function AnalyticsPage() {
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
      });
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">📊 Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DepartmentChart users={users} />
        <BookmarkTrend
          totalUsers={users.length}
          bookmarkedCount={bookmarkedUsers.length}
        />
      </div>
    </div>
  );
}
