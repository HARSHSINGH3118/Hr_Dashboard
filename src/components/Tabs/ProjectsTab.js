"use client";

export default function ProjectsTab({ user }) {
  return (
    <div className="text-sm text-gray-700 dark:text-white">
      <p>
        <strong>Current Projects:</strong>
      </p>
      <ul className="list-disc pl-6">
        <li>Employee Performance Tracking System</li>
        <li>Internal Onboarding Automation</li>
        <li>Monthly Payroll Analytics</li>
      </ul>
    </div>
  );
}
