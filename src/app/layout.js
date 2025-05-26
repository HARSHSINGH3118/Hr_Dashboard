import "./globals.css";
import Navbar from "@/components/Navbar";
import { BookmarkProvider } from "@/context/BookmarkContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BookmarkProvider>
          <Navbar />
          <main className="p-4">{children}</main>
        </BookmarkProvider>
      </body>
    </html>
  );
}
