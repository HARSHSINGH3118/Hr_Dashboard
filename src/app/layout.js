import "./globals.css";
import { BookmarkProvider } from "@/context/BookmarkContext";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <BookmarkProvider>
          <Navbar />
          <main className="p-4">{children}</main>
        </BookmarkProvider>
      </body>
    </html>
  );
}
