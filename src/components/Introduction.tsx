"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/hooks/hooks";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const linkedInUrl = "https://linkedin.com/in/philipgeorgeio";
const githubUrl = "https://github.com/pg328";

const Introduction = (props: {}) => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 mt-9 flex flex-col gap-y-9 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={"/PhilProfile.jpg"}
              alt="Portrait of Phil, smiling!"
              width="192"
              height="192"
              quality="95"
              priority
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-gray-800 dark:border-gray-200 border-opacity-20 shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 -right-2 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="m-2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <span className="font-medium">
          <span className="font-bold">{"Hi, I'm Phil! "}</span>
          {"I'm a "}
          <span className="font-bold">{"full-stack software engineer "}</span>
          {"with "}
          <span className="font-bold">{"4+ years of experience "}</span>
          <span className="font-light">{"(as of 2023)!"}</span>
          {
            "This site is under construction right now, but if you like what you see (and you're hiring) then feel free to download my CV!"
          }
        </span>
      </motion.h1>

      <div className="flex gap-2">
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact me here <BsArrowRight />
        </Link>{" "}
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/PhilipGeorgeCV.pdf"
          download
        >
          {"Download CV "}
          <BsDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={linkedInUrl}
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={githubUrl}
          target="_blank"
        >
          <BsGithub />
        </a>
      </div>
    </section>
  );
};

export default Introduction;
