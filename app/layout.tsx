import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kai-Hsiang Chuang — AI-Native Software Engineer",
  description: "AI-native software engineer specialising in applied AI workflows, backend systems, and healthcare automation. 7+ years experience. Master of IT at UTS (WAM 90.50).",
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
