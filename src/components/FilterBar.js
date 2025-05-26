"use client";

const departments = ["hr", "engineering", "sales", "marketing", "finance"];
const ratings = [1, 2, 3, 4, 5];

export default function FilterBar({
  query,
  setQuery,
  selectedDepartments,
  setSelectedDepartments,
  selectedRatings,
  setSelectedRatings,
}) {
  const toggle = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6">
      <input
        type="text"
        placeholder="Search by name, email, or department"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-4 rounded border dark:bg-gray-700 dark:text-white"
      />

      <div className="flex flex-wrap gap-6">
        <div>
          <p className="font-semibold text-sm mb-2">Department</p>
          {departments.map((dept) => (
            <label key={dept} className="block text-sm capitalize">
              <input
                type="checkbox"
                checked={selectedDepartments.includes(dept)}
                onChange={() =>
                  toggle(dept, selectedDepartments, setSelectedDepartments)
                }
              />
              <span className="ml-2">{dept}</span>
            </label>
          ))}
        </div>

        <div>
          <p className="font-semibold text-sm mb-2">Rating</p>
          {ratings.map((r) => (
            <label key={r} className="block text-sm">
              <input
                type="checkbox"
                checked={selectedRatings.includes(r)}
                onChange={() => toggle(r, selectedRatings, setSelectedRatings)}
              />
              <span className="ml-2">{"★".repeat(r)}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
