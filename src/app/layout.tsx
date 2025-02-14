import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar";
import { satoshi } from "./fonts/satoshi";

export const metadata: Metadata = {
  title: "Mail0",
  description: "Mail0 is a simple email client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} antialiased w-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
