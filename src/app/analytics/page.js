"use client";

import { useEffect, useState } from "react";
import { assignDepartment, assignRating } from "@/lib/employeeUtils";
import DepartmentChart from "@/components/DepartmentChart";
import BookmarkTrend from "@/components/BookmarkTrend";
import { useBookmarks, BookmarkProvider } from "@/context/BookmarkContext";

function AnalyticsContent() {
  const [users, setUsers] = useState([]);
  const { bookmarkedUsers } = useBookmarks(); // ✅ safe here now

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
      <h1 className="text-2xl font-bold">📊 Analytics</h1>
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

// ✅ Wrap the Analytics content in BookmarkProvider
export default function AnalyticsPage() {
  return <AnalyticsContent />;
}
