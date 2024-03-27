"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/shared/helpers/variants";

export default function About() {
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
    <div id="about">
      <div
        className="section tw-flex tw-flex-wrap tw-items-center tw-gap-7 tw-justify-center
              tw-content-start"
      >
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="tw-flex tw-justify-end"
        >
          <div
            className="tw-rounded-[50%] tw-h-96 tw-w-96 tw-relative tw-bg-black/90 dark:tw-bg-white 
                before:content-[''] before:tw-absolute before:tw-inset-[-10px_110px] before:tw-bg-gradient-to-tr
                before:tw-from-[#00ceff] before:tw-via-[#171eef] before:tw-to-[#b32ee0] before:tw-transition-all 
                before:tw-duration-500 before:tw-ease-in-out before:hover:tw-inset-[-20px_0px] 
                before:tw-animate-rotate tw-overflow-hidden 
                after:content-[''] after:tw-absolute after:tw-inset-[6px] after:tw-bg-white after:dark:tw-bg-gray-900 after:tw-rounded-[50%]
                after:tw-z-[1] tw-group/image after:tw-transition-all after:tw-duration-300 after:tw-ease-linear"
          >
            <div
              className="tw-absolute tw-inset-[30px] tw-border-solid tw-border-[6px] tw-border-black/90 dark:tw-border-white tw-z-[3] tw-rounded-[50%] 
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
              <button
                className="tw-group/button tw-p-5 tw-cursor-pointer tw-relative tw-text-xl tw-font-normal tw-border-0 tw-flex 
                  tw-items-center tw-justify-center tw-bg-transparent tw-text-gray-900 dark:tw-text-white tw-h-auto tw-w-[170px] tw-overflow-hidden tw-transition-all
                  tw-duration-100 tw-z-[-1] hover:tw-shadow-[inset_0px_0px_15px_#000] dark:hover:tw-shadow-[inset_0px_0px_12px_#fff] hover:tw-duration-1000"
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
              </button>
            </div>
          </div>
        </motion.div>
        <div className="tw-animate-fadeIn tw-flex tw-flex-col tw-gap-3 center tw-min-w-[30rem] tw-max-w-80">
          <div className="tw-text-5xl">
            <span className="tw-font-bold tw-tracking-[1px] dark:tw-text-white/90">
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
            className="lg:tw-text-2xl tw-text-[#b32ee0] tw-tracking-[3px] "
          >
            Full-Stack Web Developer
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="tw-text-lg dark:tw-text-gray-400"
          >
            I am a Full-Stack Developer with a proven track record of success
            spanning five years in web development. I specialize in crafting an
            application and transforming ideas into a user-friendly, fully
            functional websites.
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="tw-flex tw-gap-3"
          >
            <a href="https://www.linkedin.com/in/chrisbryanrabang/">
              <Image
                src="/linkedin.svg"
                className="dark:tw-invert"
                width={30}
                height={30}
                alt="Github"
              />
            </a>
            <a href="https://github.com/chrsrbng">
              <Image
                src="/github.svg"
                className="dark:tw-invert"
                width={30}
                height={30}
                alt="LinkedIn"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
