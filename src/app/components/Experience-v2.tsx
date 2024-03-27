import { EXPERIENCE_CONSTANTS } from "@/shared/constants/Experience";
import ExperienceCard from "../containers/ExperienceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { fadeIn } from "@/shared/helpers/variants";

export default function Experience() {
  return (
    <section
      id="experience"
      className="tw-mb-16 tw-scroll-mt-16 md:tw-mb-24 lg:tw-mb-36 lg:tw-scroll-mt-24"
      aria-label="Experience"
    >
      <motion.div
        variants={fadeIn("down", 0.5)}
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
            Experience
          </h2>
        </div>
      </motion.div>
      <div>
        <ol className="tw-group/list">
          {EXPERIENCE_CONSTANTS.map(
            ({ role, company, description, skills, url, date }, index) => (
              <ExperienceCard
                key={index}
                role={role}
                company={company}
                description={description}
                skills={skills}
                date={date}
                url={url}
              />
            ),
          )}
        </ol>
        <motion.div
          variants={fadeIn("down", 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="tw-mt-12 tw-block lg:tw-hidden"
        >
          <a
            href="/resume.pdf"
            className="tw-inline-flex tw-items-baseline tw-leading-tight tw-text-slate-400
              hover:tw-text-sky-400 focus-visible:tw-text-sky-400 tw-font-semibold tw-group/link tw-text-base"
            target="_blank"
            aria-label="View Full Resume"
          >
            <span>
              View Full &nbsp;
              <span>
                Resume
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="tw-inline-block twh-4 tw-w-4 tw-shrink-0 tw-transition-transform group-hover/link:-tw-translate-y-1 group-hover/link:tw-translate-x-1 
                            group-focus-visible/link:-tw-translate-y-1 group-focus-visible/link:tw-translate-x-1 motion-reduce:tw-transition-none tw-ml-1 tw-translate-y-px
                            tw-origin-center tw-rotate-45 tw-text-xs"
                />
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
