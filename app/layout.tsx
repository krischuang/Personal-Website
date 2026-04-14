import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kai-Hsiang Chuang — Senior Software Engineer",
  description: "Senior Software Engineer specialising in backend Java, API platforms, and scalable revenue systems. 7+ years experience. Master of IT at UTS (WAM 89.88).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
