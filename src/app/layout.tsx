import type { Metadata } from "next";
import { satoshi } from "./fonts/satoshi";
import "./globals.css";

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

        {children}
      </body>
    </html>
  );
}
