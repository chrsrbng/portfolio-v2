import { fadeIn } from "@/shared/helpers/variants";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function ExperienceCard({
  date,
  role,
  company,
  description,
  skills,
  url = "#",
}: {
  date: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
  url?: string;
}) {
  return (
    <motion.li
      variants={fadeIn("down", 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      className="tw-mb-12"
    >
      <div className="tw-group tw-relative tw-grid tw-pb-1 tw-transition-all sm:tw-grid-cols-8 sm:tw-gap-8 md:tw-gap-4 lg:hover:!tw-opacity-100 lg:group-hover/list:tw-opacity-50">
        <div
          className="tw-absolute -tw-inset-x-4 -tw-inset-y-4 tw-z-0 tw-hidden tw-rounded-md tw-transition motion-reduce:tw-transition-none lg:-tw-inset-x-6 lg:tw-block 
                dark:lg:group-hover:tw-bg-slate-800/90 lg:group-hover:tw-bg-slate-800/10 lg:group-hover:tw-shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:tw-drop-shadow-lg"
        ></div>
        <header
          className="tw-z-10 tw-mb-2 tw-mt-1 tw-text-xs tw-font-semibold tw-uppercase tw-tracking-wide tw-text-slate-500 sm:tw-col-span-2"
          aria-label={date}
        >
          {date}
        </header>
        <div className="tw-z-10 sm:tw-col-span-6">
          <h3 className="tw-font-medium tw-leading-snug tw-text-slate-200">
            <div>
              <a
                className="tw-inline-flex tw-items-baseline tw-font-medium tw-leading-tight tw-text-slate-400 
                hover:tw-text-sky-400 focus-visible:tw-text-sky-400 tw-group/link tw-text-base"
                href={url || "#"}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${role} at ${company} (opens in a new tab)`}
              >
                <span className="tw-absolute -tw-inset-x-4 -tw-inset-y-2.5 tw-hidden tw-rounded md:-tw-inset-x-6 md:-tw-inset-y-4 lg:tw-block"></span>
                <span className="tw-flex tw-flex-col">
                  <span className="tw-font-bold">{role}</span>
                  <span className="tw-inline-block tw-text-sm">
                    {company}
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="tw-inline-block twh-4 tw-w-4 tw-shrink-0 tw-transition-transform group-hover/link:-tw-translate-y-1 group-hover/link:tw-translate-x-1 
                            group-focus-visible/link:-tw-translate-y-1 group-focus-visible/link:tw-translate-x-1 motion-reduce:tw-transition-none tw-ml-1 tw-translate-y-px
                            tw-origin-center tw-rotate-45 tw-text-xs"
                    />
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className="tw-mt-2 tw-text-sm tw-leading-normal">{description}</p>
          {skills.length !== 0 && (
            <ul
              className="tw-mt-2 tw-flex tw-flex-wrap"
              aria-label="Technologies used"
            >
              {skills.map((skill, index) => (
                <motion.li
                  variants={fadeIn("left", (index + 1) / 10 + 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.7 }}
                  key={index}
                  className="tw-mr-1.5 tw-mt-2"
                >
                  <div
                    className="tw-flex tw-items-center tw-rounded-full dark:tw-bg-sky-400/10 tw-bg-sky-600/10 tw-px-3 tw-py-1 tw-text-xs tw-font-medium tw-leading-5 
                    dark:tw-text-sky-300 tw-text-sky-400"
                  >
                    {skill}
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.li>
  );
}
