import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philip George",
  description: "Philip George's portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
