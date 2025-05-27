"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar({ session }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = saved || (prefersDark ? "dark" : "light");

    document.documentElement.classList.toggle("dark", initial === "dark");
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    setTheme(next);
  };

  const isLoggedIn = !!session;

  return (
    <nav
      style={{
        backgroundColor: theme === "dark" ? "#1f1f1f" : "#ffffff",
        color: theme === "dark" ? "#f5f5f5" : "#1f1f1f",
        padding: "12px 24px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "20px" }}>HR Dashboard</div>

      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <Link
          href="/"
          style={{ fontSize: "14px", color: "inherit", textDecoration: "none" }}
        >
          Dashboard
        </Link>
        <Link
          href="/bookmarks"
          style={{ fontSize: "14px", color: "inherit", textDecoration: "none" }}
        >
          Bookmarks
        </Link>
        <Link
          href="/analytics"
          style={{ fontSize: "14px", color: "inherit", textDecoration: "none" }}
        >
          Analytics
        </Link>

        {isLoggedIn ? (
          <>
            <span style={{ fontSize: "14px", opacity: 0.8 }}>
              {session.user?.name}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              style={{
                padding: "6px 12px",
                fontSize: "13px",
                backgroundColor: "#e53935",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              style={{
                padding: "6px 12px",
                backgroundColor: "#3b82f6",
                color: "#fff",
                fontSize: "13px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Login
            </Link>

            <Link
              href="/signup"
              style={{
                padding: "6px 12px",
                backgroundColor: "#10b981",
                color: "#fff",
                fontSize: "13px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </>
        )}

        <button
          onClick={toggleTheme}
          style={{
            padding: "6px 12px",
            backgroundColor: theme === "dark" ? "#374151" : "#e5e7eb",
            color: theme === "dark" ? "#fff" : "#000",
            fontSize: "13px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
