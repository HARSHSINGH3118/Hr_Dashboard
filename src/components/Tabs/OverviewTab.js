"use client";

export default function OverviewTab({ user }) {
  if (!user) {
    return <p className="text-gray-500">Loading user data...</p>;
  }

  return (
    <div className="text-sm text-gray-700 dark:text-white">
      <p>
        <strong>Full Name:</strong> {user.firstName} {user.lastName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
      <p>
        <strong>Department:</strong> {user.department}
      </p>
      <p>
        <strong>Bio:</strong> Enthusiastic team player and quick learner.
      </p>
    </div>
  );
}
