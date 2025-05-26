"use client";

import { createContext, useContext, useState } from "react";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarkedUsers, setBookmarkedUsers] = useState([]);

  const addBookmark = (user) => {
    setBookmarkedUsers((prev) =>
      prev.some((u) => u.id === user.id) ? prev : [...prev, user]
    );
  };

  const removeBookmark = (id) => {
    setBookmarkedUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarkedUsers, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmarks = () => useContext(BookmarkContext);
