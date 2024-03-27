import { fadeIn } from "@/shared/helpers/variants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="tw-mb-16 tw-scroll-mt-16 md:tw-mb-24 lg:tw-mb-36 lg:tw-scroll-mt-24"
      aria-label="About Me"
    >
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="tw-sticky tw-top-0 tw-z-20"
      >
        <div
          className="-tw-mx-6 tw-mb-4 tw-w-screen tw-bg-slate-900/75
        tw-px-6 tw-py-5 tw-backdrop-blur md:-tw-mx-12 md:tw-px-12 lg:tw-sr-only lg:tw-relative
        lg:tw-top-auto lg:tw-mx-auto lg:tw-w-full lg:tw-px-0 lg:tw-py-0 lg:tw-opacity-0 tw-text-white"
        >
          <h2 className="tw-text-sm tw-font-bold tw-uppercase tw-tracking-widest tw-text-slate-200 lg:tw-sr-only">
            About
          </h2>
        </div>
      </motion.div>
      <div>
        <motion.p
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="tw-mb-4"
        >
          I am a Full-Stack Developer with a proven track record of success
          spanning five years in web development. I specialize in crafting an
          application and transforming ideas into a user-friendly, fully
          functional websites.
        </motion.p>
        <motion.p
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          I also have a genuine passion for coding and a strong desire to
          continuously expand my skills with emerging technologies. Committed to
          surpassing expectations and driving progress, and is ready to
          contribute effectively to any development team.
        </motion.p>
      </div>
    </section>
  );
}
