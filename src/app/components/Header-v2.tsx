import { LINKS } from "@/shared/constants/Nav";
import { fadeIn } from "@/shared/helpers/variants";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-scroll";
import { twJoin } from "tailwind-merge";

export default function Header({
  setIsDarkTheme,
}: {
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}) {
  const [activeLink, setActiveLink] = useState("content");
  const nameArray = [
    "C",
    "h",
    "r",
    "i",
    "s",
    "",
    "B",
    "r",
    "y",
    "a",
    "n",
    "",
    "R",
    "a",
    "b",
    "a",
    "n",
    "g",
  ];

  return (
    <header
      className="lg:tw-sticky lg:tw-top-0 lg:tw-flex lg:tw-max-h-[70vh] lg:tw-w-1/2 lg:tw-flex-col 
      lg:tw-justify-between lg:tw-pt-24"
    >
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="lg:tw-flex tw-hidden lg:tw-py-3 lg:tw-justify-center"
      >
        <div
          className="tw-rounded-[50%] tw-h-60 tw-w-60 tw-relative tw-bg-slate-900 dark:tw-bg-white/90 
                before:content-[''] before:tw-absolute before:tw-inset-[-10px_80px] before:tw-bg-gradient-to-tr
                before:tw-transition-all before:tw-from-cyan-300 before:tw-via-sky-400 before:tw-to-sky-700 
                before:tw-duration-500 before:tw-ease-in-out before:hover:tw-inset-[-20px_0px] 
                before:tw-animate-rotate tw-overflow-hidden 
                after:content-[''] after:tw-absolute after:tw-inset-[6px] after:tw-bg-white after:dark:tw-bg-slate-800 after:tw-rounded-[50%]
                after:tw-z-[1] tw-group/image after:tw-transition-all after:tw-duration-300 after:tw-ease-linear"
        >
          <div
            className="tw-absolute tw-inset-[30px] tw-border-solid tw-border-[6px] tw-border-black/90 dark:tw-border-sky-400 tw-z-[3] tw-rounded-[50%] 
                  tw-overflow-hidden tw-flex tw-justify-center tw-items-center"
          >
            <Image
              src="/Chris.jpeg"
              width={400}
              height={500}
              alt="Chris"
              className="tw-absolute tw-top-0 tw-left-0 tw-w-[100%] tw-h-[100%] tw-object-cover tw-transition-all tw-duration-500 tw-ease-in-out 
                    tw-pointer-events-none group-hover/image:tw-opacity-0"
            />
            <a
              href="/resume.pdf"
              download="Chris' Resume"
              target="_blank"
              aria-label="Download Resume"
              className="tw-group/button tw-p-5 tw-cursor-pointer tw-relative tw-text-xl tw-font-normal tw-border-0 tw-flex 
                  tw-items-center tw-justify-center tw-bg-transparent tw-text-slate-600 tw-h-auto tw-w-[110px] tw-overflow-hidden tw-transition-all
                  tw-duration-100 tw-z-[-1] hover:tw-duration-1000"
            >
              <span
                className="group-hover/button:tw-w-full tw-absolute tw-left-0 tw-h-full tw-w-5 tw-border-y tw-border-l tw-border-gray-900 dark:tw-border-white
                    tw-transition-all tw-duration-500"
              ></span>
              <p
                className="group-hover/button:tw-opacity-0 group-hover/button:tw-translate-x-[-100%] tw-absolute tw-translate-x-0 tw-transition-all
                    tw-duration-200"
              >
                Resume
              </p>
              <span className="group-hover/button:tw-translate-x-0  group-hover/button:tw-opacity-100 tw-absolute  tw-translate-x-full tw-opacity-0  tw-transition-all tw-duration-200">
                Download
              </span>
              <span className="group-hover/button:tw-w-full tw-absolute tw-right-0 tw-h-full tw-w-5  tw-border-y tw-border-r tw-border-gray-900 dark:tw-border-white tw-transition-all tw-duration-500"></span>
            </a>
          </div>
        </div>
      </motion.div>
      <div className="tw-text-4xl sm:tw-text-5xl lg:tw-text-center">
        <span className="tw-font-bold tw-tracking-[1px] tw-text-slate-600">
          {nameArray.map((letter, index) => (
            <motion.span
              variants={fadeIn("up", (index + 1) / 10)}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.2 }}
              viewport={{ once: true }}
              key={index}
              className="tw-relative tw-inline-block 
                       tw-cursor-pointer  hover:tw-translate-y-[-5px] hover:tw-transition-all
                       hover:tw-duration-300 hover:tw-text-[#00ceff]"
            >
              {letter ? letter : <p>&nbsp;</p>}
            </motion.span>
          ))}
        </span>
      </div>
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="tw-text-lg tw-text-sky-400 tw-mt-3 tw-font-medium tracking-tight sm:tw-text-xl lg:tw-text-center"
      >
        Full-Stack Web Developer
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="tw-mt-3 lg:tw-text-center"
      >
        <FontAwesomeIcon
          icon={faCircleHalfStroke}
          className="tw-h-6 tw-cursor-pointer dark:tw-text-slate-600 tw-w-6 dark:hover:tw-text-slate-200 hover:tw-text-slate-400 tw-absolute 
          tw-right-5 tw-top-8 tw-object-right-top lg:tw-static lg:tw-right-auto lg:tw-top-auto"
          onClick={() => setIsDarkTheme((prevState) => !prevState)}
        />
      </motion.div>
      <nav className="tw-hidden lg:tw-block" aria-label="In-page jump links">
        <ul className="tw-mt-6 tw-w-max">
          {LINKS.map((link: (typeof LINKS)[number], index) => (
            <motion.li
              key={index}
              variants={fadeIn("right", (index + 1) / 10 + 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Link
                href={`#${link}`}
                to={link}
                offset={link === "contact" ? -100 : -50}
                smooth={true}
                spy={true}
                className="tw-group tw-flex tw-items-center tw-py-3"
                onSetActive={(value) => setActiveLink(value)}
              >
                <span
                  className={twJoin(
                    "tw-mr-4 tw-h-px  tw-transition-all group-hover:tw-w-16 dark:group-hover:tw-bg-slate-200 group-focus-visible:tw-w-16 group-focus-visible:tw-bg-slate-200 motion-reduce:tw-transition-none group-hover:tw-bg-slate-600",
                    activeLink === link
                      ? "dark:tw-bg-slate-200 tw-bg-slate-400 tw-w-16"
                      : "tw-w-8 dark:tw-bg-slate-600 tw-bg-slate-400",
                  )}
                ></span>
                <span
                  className={twJoin(
                    "tw-text-xs tw-font-bold tw-uppercase tw-tracking-widest tw-text-slate-400 group-hover:tw-text-slate-600 dark:group-hover:tw-text-slate-200 dark:group-focus-visible:tw-text-slate-200 group-focus-visible:tw-text-slate-400",
                    activeLink === link &&
                      "dark:tw-text-slate-200 tw-text-slate-600",
                  )}
                >
                  {link}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <ul
        className="tw-ml-1 tw-mt-2 tw-flex tw-items-center"
        aria-label="Social Media"
      >
        <motion.li
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="tw-mr-5 tw-text-xs tw-shrink-0"
        >
          <a
            className="tw-block dark:hover:tw-text-slate-200 hover:tw-text-slate-400"
            href="https://github.com/chrsrbng"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="tw-sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="tw-h-6 tw-w-6"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </motion.li>
        <motion.li
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            className="tw-block dark:hover:tw-text-slate-200 hover:tw-text-slate-400"
            href="https://www.linkedin.com/in/chrisbryanrabang/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="tw-sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="tw-h-6 tw-w-6"
              aria-hidden="true"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
        </motion.li>
      </ul>
    </header>
  );
}
