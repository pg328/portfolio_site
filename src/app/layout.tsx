import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";

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
    <ThemeContextProvider>
      <html lang="en">
        <body
          className={`${raleway.className} bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50`}
        >
          <div className="bg-rose-200 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
          <div className="bg-emerald-200 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <ThemeSwitch />
            <Toaster position="bottom-right" />
          </ActiveSectionContextProvider>
        </body>
      </html>
    </ThemeContextProvider>
  );
}
