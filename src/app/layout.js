import "./globals.css";
import Navbar from "@/components/Navbar";
import { BookmarkProvider } from "@/context/BookmarkContext";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions); // ✅ fetch current user session

  return (
    <html lang="en">
      <body>
        <BookmarkProvider>
          {/* ✅ pass session as prop to Navbar */}
          <Navbar session={session} />
          <main className="p-4">{children}</main>
        </BookmarkProvider>
      </body>
    </html>
  );
}
