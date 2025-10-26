import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kai-Hsiang Chuang - Software Engineer",
  description: "Master of IT student at UTS with 5+ years of software engineering experience in frontend, backend, and DevOps",
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
