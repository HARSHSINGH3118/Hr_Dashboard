"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { assignDepartment, assignRating } from "@/lib/employeeUtils";
import useSearch from "@/hooks/useSearch";
import EmployeeCard from "@/components/EmployeeCard";
import FilterBar from "@/components/FilterBar";
import CreateUserModal from "@/components/CreateUserModal";

export default function HomeClient() {
  const [users, setUsers] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const USERS_PER_PAGE = 6;
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

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + USERS_PER_PAGE
  );

  const handleView = (user) => router.push(`/employee/${user.id}`);
  const handlePromote = (user) => alert(`${user.firstName} promoted!`);
  const handleCreateUser = (newUser) => setUsers((prev) => [newUser, ...prev]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, selectedDepartments, selectedRatings]);

  return (
    <div className="p-4">
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
        {paginatedUsers.map((user) => (
          <EmployeeCard
            key={user.id}
            user={user}
            onView={handleView}
            onPromote={handlePromote}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 dark:bg-gray-700 text-sm rounded disabled:opacity-50"
          >
            ⬅ Prev
          </button>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 dark:bg-gray-700 text-sm rounded disabled:opacity-50"
          >
            Next ➡
          </button>
        </div>
      )}

      <CreateUserModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onCreate={handleCreateUser}
      />

      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          + Create User
        </button>
      </div>
    </div>
  );
}
