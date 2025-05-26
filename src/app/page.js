"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { assignDepartment, assignRating } from "@/lib/employeeUtils";
import useSearch from "@/hooks/useSearch";
import EmployeeCard from "@/components/EmployeeCard";
import FilterBar from "@/components/FilterBar";

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=20")
      .then((res) => res.json())
      .then((data) => {
        const enriched = data.users.map((user) => ({
          ...user,
          department: assignDepartment().toLowerCase(),
          rating: assignRating(),
        }));
        setUsers(enriched);
      });
  }, []);

  const {
    query,
    setQuery,
    selectedDepartments,
    setSelectedDepartments,
    selectedRatings,
    setSelectedRatings,
    filteredUsers,
  } = useSearch(users);

  const handleView = (user) => router.push(`/employee/${user.id}`);
  const handlePromote = (user) => alert(`${user.firstName} promoted!`);

  return (
    <div className="p-4">
      {/* Button to toggle filter from inside page */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="px-4 py-1 text-sm bg-purple-600 text-white rounded"
        >
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {showFilter && (
        <FilterBar
          query={query}
          setQuery={setQuery}
          selectedDepartments={selectedDepartments}
          setSelectedDepartments={setSelectedDepartments}
          selectedRatings={selectedRatings}
          setSelectedRatings={setSelectedRatings}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <EmployeeCard
            key={user.id}
            user={user}
            onView={handleView}
            onPromote={handlePromote}
          />
        ))}
      </div>
    </div>
  );
}
