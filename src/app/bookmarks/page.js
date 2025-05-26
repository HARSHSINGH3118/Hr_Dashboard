"use client";

import { useBookmarks } from "@/context/BookmarkContext";

export default function BookmarksPage() {
  const { bookmarkedUsers, removeBookmark } = useBookmarks();

  const handlePromote = (user) => alert(`${user.firstName} promoted!`);
  const handleAssign = (user) =>
    alert(`${user.firstName} assigned to a project!`);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bookmarked Employees</h1>

      {bookmarkedUsers.length === 0 ? (
        <p>No bookmarked employees yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bookmarkedUsers.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-white dark:bg-gray-800 rounded shadow space-y-2"
            >
              <h2 className="text-lg font-semibold text-black dark:text-white">
                {user.firstName} {user.lastName}
              </h2>
              <p>{user.email}</p>
              <p>Department: {user.department}</p>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => removeBookmark(user.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                >
                  Remove
                </button>
                <button
                  onClick={() => handlePromote(user)}
                  className="px-2 py-1 bg-green-600 text-white rounded text-sm"
                >
                  Promote
                </button>
                <button
                  onClick={() => handleAssign(user)}
                  className="px-2 py-1 bg-indigo-600 text-white rounded text-sm"
                >
                  Assign
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
