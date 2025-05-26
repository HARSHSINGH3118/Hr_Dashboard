import { useState, useMemo } from "react";

export default function useSearch(users) {
  const [query, setQuery] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const name = `${user.firstName} ${user.lastName}`.toLowerCase();
      const email = user.email.toLowerCase();
      const department = user.department.toLowerCase();
      const rating = user.rating;

      const matchesQuery =
        name.includes(query.toLowerCase()) ||
        email.includes(query.toLowerCase()) ||
        department.includes(query.toLowerCase());

      const matchesDepartment =
        selectedDepartments.length === 0 ||
        selectedDepartments.includes(department);

      const matchesRating =
        selectedRatings.length === 0 || selectedRatings.includes(rating);

      return matchesQuery && matchesDepartment && matchesRating;
    });
  }, [users, query, selectedDepartments, selectedRatings]);

  return {
    query,
    setQuery,
    selectedDepartments,
    setSelectedDepartments,
    selectedRatings,
    setSelectedRatings,
    filteredUsers,
  };
}
