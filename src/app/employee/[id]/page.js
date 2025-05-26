"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { assignDepartment, assignRating } from "@/lib/employeeUtils";
import TabbedUI from "@/components/TabbedUI";

export default function EmployeeDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data.department = assignDepartment();
        data.rating = assignRating();
        setUser(data);
      });
  }, [id]);

  if (!user) return <p className="p-4">Loading user...</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">
        {user.firstName} {user.lastName}
      </h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Age: {user.age}</p>
      <p>Department: {user.department}</p>
      <p className="text-yellow-500">
        Rating: {"★".repeat(user.rating)}
        {"☆".repeat(5 - user.rating)}
      </p>
      <TabbedUI user={user} />
    </div>
  );
}
