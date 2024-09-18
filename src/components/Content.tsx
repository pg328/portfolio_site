"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/hooks/hooks";
import Image from "next/image";
import React, { LegacyRef, ReactNode, Ref, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BsArrowDown,
  BsArrowRight,
  BsCopy,
  BsDownload,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import Link from "next/link";
import SectionDivider from "./SectionDivider";
import { sendEmail } from "@/app/actions/sendEmail";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const linkedInUrl = "https://linkedin.com/in/philipgeorgeio";
const githubUrl = "https://github.com/pg328";
const emailAddress = "philipgeorge1337@yahoo.co.uk";
const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    //SUCCESS
  } catch (error) {
    //ERROR
  }
};

const Content = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 scroll-smooth">
      <Introduction
        setActiveSection={setActiveSection}
        setTimeOfLastClick={setTimeOfLastClick}
      />
      <SectionDivider />
      <About
        setActiveSection={setActiveSection}
        setTimeOfLastClick={setTimeOfLastClick}
      />
      <SectionDivider />
      <Projects
        setActiveSection={setActiveSection}
        setTimeOfLastClick={setTimeOfLastClick}
      />
      <SectionDivider />
      <Skills
        setActiveSection={setActiveSection}
        setTimeOfLastClick={setTimeOfLastClick}
      />
      <SectionDivider />
      <Contact
        setActiveSection={setActiveSection}
        setTimeOfLastClick={setTimeOfLastClick}
      />
    </main>
  );
};

type SectionProps = {
  setActiveSection: Function;
  setTimeOfLastClick: Function;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <motion.h2
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="text-3xl font-medium capitalize mb-8 text-center"
    >
      {children}
    </motion.h2>
  );
};

const Introduction = (props: SectionProps) => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = { ...props };
  return (
    <section
      ref={ref}
      id="home"
      className="pt-9 flex flex-col gap-y-9 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.125 }}
          >
            <Image
              src={"/PhilProfile.jpg"}
              alt="Portrait of Phil, smiling!"
              width="191"
              height="191"
              quality="94"
              priority
              className="h-25 w-24 rounded-full object-cover border-[0.35rem] border-gray-800 dark:border-gray-200 border-opacity-20 shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-1 -right-2 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 124,
              delay: 1.1,
              duration: 1.7,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="w-full sm:m-3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <span className="font-medium">
          <span className="font-bold">{"Hi, I'm Phil! "}</span>
          {"I'm a "}
          <span className="font-bold">{"full-stack software engineer "}</span>
          {
            " based in London. I have a passion for creating software that makes a real difference in people's lives. Whether it's enhancing healthcare tools or building personal projects for fun, I love tackling challenges and learning along the way. Thanks for stopping by my website!"
          }
        </span>
      </motion.h1>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="flex gap-3 flex-col sm:flex-row items-center">
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
          >
            Contact me here{" "}
            <div>
              <div className="hidden sm:flex">
                <BsArrowRight />
              </div>
              <div className="sm:hidden">
                <BsArrowDown />
              </div>
            </div>{" "}
          </Link>{" "}
          <a
            className="group bg-white px-8 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/PhilipGeorgeCVWithDetail.pdf"
            download
          >
            {"Download CV "}
            <BsDownload className="opacity-61 group-hover:translate-y-1 transition" />
          </a>
          <a
            className="group bg-white px-8 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/PhilipGeorgeCV.pdf"
            download
          >
            {"Download Short CV "}
            <BsDownload className="opacity-61 group-hover:translate-y-1 transition" />
          </a>
          <button
            className="group bg-white px-8 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            onClick={() => {
              copyText(emailAddress);
            }}
          >
            {"Copy my email address "}
            <BsCopy className="opacity-61 group-hover:translate-y-1 transition" />
          </button>
          <a
            className="bg-white p-5 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href={linkedInUrl}
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-5 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href={githubUrl}
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const About = (props: SectionProps) => {
  const { ref } = useSectionInView("About", 0.5);
  const { setActiveSection, setTimeOfLastClick } = { ...props };

  return (
    <section ref={ref} id="about" className="pt-8 scroll-mt-24">
      <SectionHeading>About Me</SectionHeading>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-3 p-3 max-w-[42rem] border border-black/5 dark:border-white/5 overflow-hidden sm:pr-8 rounded-sm"
      >
        <p>
          {`Over the years, I've been lucky enough to work on some exciting
          projects:`}
        </p>

        {/* Professional Projects */}
        <ul>
          <li>
            <strong>Healthcare Innovation:</strong> At MetadataWorks, I helped
            develop a search app for the NHS that made managing health data
            concepts easier. It was rewarding to see our work improve
            accessibility for healthcare professionals.
          </li>
          <li>
            <strong>Retail Platform Modernization:</strong> While at Dunelm, I
            worked on updating key parts of their platform, making things run
            smoother and faster. I also found ways to make data retrieval more
            efficient, which was pretty cool.
          </li>
          <li>
            <strong>Construction Technology:</strong>{" "}
            {`At Disperse, I jumped into
            a complex codebase and contributed to features like the "Mark Up and
            Share" tool. It was a whirlwind experience, but I learned a ton and
            enjoyed every minute.`}
          </li>
        </ul>

        {/* Personal Projects */}
        <p>In my free time, I enjoy working on personal projects:</p>
        <ul>
          <li>
            <strong>Decentralized Video Chat:</strong> During the lockdowns, I
            built a custom video chat app with features like picture-in-picture
            and screen-sharing. It was a fun way to stay connected with friends
            and family.
          </li>
          <li>
            <strong>AI in Music Composition:</strong> I experimented with AI
            models to see how they could analyze music and evoke emotions.
            Combining tech with creativity was a fascinating experience.
          </li>
          <li>
            <strong>Countdown Numbers Game:</strong>{" "}
            {`I created a terminal-based
            game inspired by the TV show "Countdown." I'm currently working on
            enhancing it with Rust and WebAssembly to make it even better.`}
          </li>
        </ul>

        {/* Closing Statement */}
        <p>
          {`I believe in writing clean, maintainable code and enjoy collaborating
          with others. Whether it's through pair programming or sharing
          knowledge with my team, I value the power of teamwork.`}
        </p>
      </motion.div>
    </section>
  );
};

const projectsData = [
  {
    title: "VideoChat",
    description: "Video Chat App I made over lockdown",
    url: "https://forge.limited",
    thumbnail: "/VideoChatScreenshot.png",
    thumbnailDimensions: { height: 1646, width: 2780 },
    stack: ["React", "WebRTC", "Node.js", "Cloud Firestore", "JavaScript"],
  },
  {
    title: "Numbers Game",
    description:
      "A CLI based Numbers Game from the popular UK show Countdown (and 8 out of 10 cats does Countdown)",
    url: "https://github.com/pg328/CountdownNumbersGame",
    thumbnail: "/NumbersGameScreenshot.png",
    thumbnailDimensions: { height: 1684, width: 1644 },
    stack: ["Python", "Bash Scripting", "Terminal CLI Development", "ASCII"],
  },
  {
    title: "Occam's Protocol - App",
    description:
      "An app I built to help me in the gym with tracking things and holding to the exercise regime from the 4 Hour Body by Tim Ferris. Tracked things include Time Under Tension, weight and seat settings, Max Reps, etc...",
    url: "https://github.com/pg328/OccamsProtocol",
    thumbnail: "/OccamsProtocolScreenshot.jpeg",
    thumbnailDimensions: { height: 2048, width: 3000 },
    stack: ["React Native", "Mobile LocalStorage", "JavaScript"],
  },
] as const;

const Projects = (props: SectionProps) => {
  const { ref } = useSectionInView("Projects", 0.5);
  const { setActiveSection, setTimeOfLastClick } = { ...props };

  return (
    <section ref={ref} id="projects" className="pt-8 scroll-mt-24">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project) => {
          return (
            <React.Fragment key={project.title}>
              <Project {...project} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  url,
  thumbnail,
  thumbnailDimensions: { height, width },
  stack,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgess }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <a href={url}>
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {stack.map((skill, index) => (
                <li
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={thumbnail}
            alt={`Project: ${title}`}
            quality={95}
            width={width}
            height={height}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                transition 
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2

                group-even:right-[initial] group-even:-left-40"
          />
        </a>
      </article>
    </motion.div>
  );
};

const skillsData = [
  "TypeScript",
  "Python",
  "SQL",
  "Java",
  "JavaScript",
  "React.js",
  "Node.js",
  "GraphQL",
  "Django",
  "HAProxy",
  "NGINX",
  "WebRTC",
  "TensorFlow",
  "Keras",
  "NumPy",
  "SciPy",
  "HuggingFace",
  "AWS",
  "Docker",
  "Terraform",
  "GitHub Actions",
  "CircleCI",
  "mySQL",
  "SQLite",
  "Postgres",
  "MongoDB",
  "ElasticSearch",
  "GunJS",
  "Redis",
  "Prisma (TS)",
  "GORM (Groovy)",
];

const Skills = (props: SectionProps) => {
  const { ref } = useSectionInView("Skills", 0.5);
  const { setActiveSection, setTimeOfLastClick } = { ...props };

  return (
    <section
      ref={ref}
      id="skills"
      className="max-w-[53rem] scroll-mt-28 text-center sm:my-20"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, idx) => (
          <motion.li
            key={idx}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            viewport={{ once: true }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

const Contact = (props: SectionProps) => {
  const { ref } = useSectionInView("Contact", 0.5);
  const { setActiveSection, setTimeOfLastClick } = { ...props };
  const { pending } = useFormStatus();

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section
      ref={ref}
      id="contact"
      className="pt-8 w-[min(100%,38rem)] text-center scroll-mt-24"
    >
      <SectionHeading>Contact Me!</SectionHeading>
      <p className="text-gray-700 dark:text-gray-500 mt-6">
        Please contact me by email at{" "}
        <a className="underline" href={"mailto:" + emailAddress}>
          {emailAddress}
        </a>{" "}
        or through this form!
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error.message);
          } else {
            toast.success("Success!");
            formRef.current?.reset();
          }
        }}
      >
        <input
          type="email"
          required
          name="senderEmail"
          maxLength={500}
          className="h-14 rounded-lg border border-black/10 p-4 dark:bg-gray-900"
          placeholder="Your e-mail address"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-gray-900"
          name="emailContent"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65"
          disabled={pending}
        >
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              <span>Send</span>
              <FaRegPaperPlane className="text-xs opacity-70 transition-all" />
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default Content;

// https://www.youtube.com/watch?v=sUKptmUVIBM&t=12085s
