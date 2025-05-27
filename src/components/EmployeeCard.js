"use client";

import { useBookmarks } from "@/context/BookmarkContext";
import { useMemo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function EmployeeCard({ user, onView, onPromote }) {
  const { bookmarkedUsers, addBookmark } = useBookmarks();
  const controls = useAnimation();

  const isBookmarked = useMemo(() => {
    return bookmarkedUsers.some((u) => u.id === user.id);
  }, [bookmarkedUsers, user.id]);

  // 👇 Trigger initial fade-in + scale animation
  useEffect(() => {
    controls.start({ opacity: 1, scale: 1 });
  }, [controls]);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -100, right: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.x < -80 && !isBookmarked) {
          controls.start({ x: -120, opacity: 0 });
          setTimeout(() => addBookmark(user), 300);
        } else {
          controls.start({ x: 0 }); // Snap back
        }
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={controls}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-2"
    >
      {/* Full Name */}
      <h2 className="text-lg font-semibold text-black dark:text-white">
        {user.firstName} {user.lastName}
      </h2>

      {/* Email */}
      <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>

      {/* Age */}
      <p className="text-sm">Age: {user.age}</p>

      {/* Department */}
      <p className="text-sm">
        Department: <strong>{user.department}</strong>
      </p>

      {/* Rating */}
      <p className="text-sm">
        Rating:
        <span className="ml-1 text-yellow-500">
          {"★".repeat(user?.rating || 0)}
          {"☆".repeat(5 - (user?.rating || 0))}
        </span>
      </p>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onView(user)}
          aria-label="View user"
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded"
        >
          View
        </button>

        <button
          onClick={() => addBookmark(user)}
          disabled={isBookmarked}
          aria-label="Bookmark user"
          className={`px-2 py-1 text-sm rounded ${
            isBookmarked
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-yellow-500 text-white"
          }`}
        >
          {isBookmarked ? "Bookmarked" : "Bookmark"}
        </button>

        <button
          onClick={() => onPromote(user)}
          aria-label="Promote user"
          className="px-2 py-1 text-sm bg-green-600 text-white rounded"
        >
          Promote
        </button>
      </div>
    </motion.div>
  );
}
