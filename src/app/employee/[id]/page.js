"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import OverviewTab from "@/components/Tabs/OverviewTab";
import ProjectsTab from "@/components/Tabs/ProjectsTab";
import FeedbackTab from "@/components/Tabs/FeedbackTab";

export default function EmployeeTabs({ user }) {
  const [activeTab, setActiveTab] = useState("overview");

  const tabComponents = {
    overview: <OverviewTab user={user} />,
    projects: <ProjectsTab user={user} />,
    feedback: <FeedbackTab user={user} />,
  };

  return (
    <div className="mt-4">
      <div className="flex gap-4 border-b pb-2">
        {["overview", "projects", "feedback"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm px-3 py-1 rounded ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          {tabComponents[activeTab]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
