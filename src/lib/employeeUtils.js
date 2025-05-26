export const assignDepartment = () => {
  const departments = ["Engineering", "Sales", "HR", "Marketing", "Finance"];
  return departments[Math.floor(Math.random() * departments.length)];
};

export const assignRating = () => {
  return Math.floor(Math.random() * 5) + 1;
};
