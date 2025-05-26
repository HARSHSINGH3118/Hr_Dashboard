"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Get auth state from cookie or manually control this toggle later
  const isLoggedIn =
    typeof window !== "undefined" &&
    document.cookie.includes("next-auth.session-token");

  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-4 py-3 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          HR Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
          >
            Dashboard
          </Link>
          <Link
            href="/bookmarks"
            className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
          >
            Bookmarks
          </Link>
          <Link
            href="/analytics"
            className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
          >
            Analytics
          </Link>

          {isLoggedIn ? (
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-sm px-2 py-1 bg-red-600 text-white rounded"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="text-sm px-3 py-1 bg-blue-600 text-white rounded"
            >
              Login
            </Link>
          )}

          <button
            onClick={() => setDark(!dark)}
            className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-white"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
