"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

const tabs = ["Home", "About", "Projects", "Skills", "Contact"] as const;
export type TabType = typeof tabs;
export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex flex-row w-[22rem] flex-wrap justify-center items-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {tabs.map((tab) => (
            <motion.li
              key={tab}
              className="h-3/4 flex justify-center items-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-100": activeSection === tab,
                  },
                )}
                href={`#${tab.toLowerCase()}`}
                onClick={() => {
                  setActiveSection(tab);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {tab}
                {tab === activeSection && (
                  <motion.span
                    className=" flex justify-center items-center bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-white dark:bg-opacity-20"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
