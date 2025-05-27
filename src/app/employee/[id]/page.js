"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import OverviewTab from "@/components/Tabs/OverviewTab";
import ProjectsTab from "@/components/Tabs/ProjectsTab";
import FeedbackTab from "@/components/Tabs/FeedbackTab";

export default function EmployeePage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState("overview");

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser({
          ...data,
          department: "engineering", // mock
          rating: 4, // mock
        });
      });
  }, [id]);

  if (!user) return <p className="p-4">Loading user...</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {user.firstName} {user.lastName}
      </h1>

      <div className="flex gap-4 border-b pb-2 mb-4">
        {["overview", "projects", "feedback"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`text-sm px-3 py-1 rounded ${
              tab === t
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === "overview" && <OverviewTab user={user} />}
      {tab === "projects" && <ProjectsTab user={user} />}
      {tab === "feedback" && <FeedbackTab user={user} />}
    </div>
  );
}
