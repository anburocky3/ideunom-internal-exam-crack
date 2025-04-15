import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDEUNOM - Internal Exam Assistant",
  description:
    "Simple app designed to help students with IDEUNOM (University of Madras) internal exams by providing pre-filled answers for assignments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
