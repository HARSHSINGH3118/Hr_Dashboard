"use client";
import { useState } from "react";

export default function TabbedUI({ user }) {
  const [tab, setTab] = useState("overview");

  return (
    <div className="mt-6">
      <div className="flex gap-4 border-b pb-2">
        {["overview", "projects", "feedback"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`capitalize text-sm ${
              tab === t
                ? "font-bold border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-4 text-sm">
        {tab === "overview" && (
          <p>
            {user.firstName} is a dedicated employee based in{" "}
            {user.address?.city}, {user.address?.state}.
          </p>
        )}
        {tab === "projects" && (
          <ul className="list-disc pl-5">
            <li>Employee Management System</li>
            <li>Performance Tracker</li>
          </ul>
        )}
        {tab === "feedback" && (
          <ul className="list-disc pl-5">
            <li>Excellent teamwork and leadership.</li>
            <li>Can improve on reporting timelines.</li>
          </ul>
        )}
      </div>
    </div>
  );
}
