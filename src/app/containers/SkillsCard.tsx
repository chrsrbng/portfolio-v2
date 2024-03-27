import { fadeIn } from "@/shared/helpers/variants";
import { motion } from "framer-motion";
import Image from "next/image";

export const SkillCard = ({
  aspect,
  skills,
}: {
  aspect: string;
  skills: Array<{
    label: string;
    iconPath: string;
    height?: number;
    width?: number;
  }>;
}) => {
  return (
    <motion.li
      variants={fadeIn("down", 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      className="tw-mb-12"
    >
      <div className="tw-group tw-relative tw-flex tw-pb-1 tw-transition-all sm:tw-gap-8 md:tw-gap-4 lg:hover:!tw-opacity-100 lg:group-hover/list:tw-opacity-50">
        <div
          className="tw-absolute -tw-inset-x-4 -tw-inset-y-4 tw-z-0 tw-hidden tw-rounded-md tw-transition motion-reduce:tw-transition-none lg:-tw-inset-x-6 lg:tw-block 
                dark:lg:group-hover:tw-bg-slate-800/90 lg:group-hover:tw-bg-slate-800/10 lg:group-hover:tw-shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:tw-drop-shadow-lg"
        ></div>
        <div className="tw-z-10 sm:tw-col-span-6">
          <h3 className="tw-font-medium tw-leading-snug tw-text-slate-200">
            <div
              className="tw-inline-flex tw-items-baseline tw-font-medium tw-leading-tight  tw-text-slate-400 
                hover:tw-text-sky-400 focus-visible:tw-text-sky-400 tw-group/link tw-text-base"
              aria-label={aspect}
            >
              {/* <span className="tw-absolute -tw-inset-x-4 -tw-inset-y-2.5 tw-hidden tw-rounded md:-tw-inset-x-6 md:-tw-inset-y-4 lg:tw-block"></span> */}
              <span className="tw-flex tw-flex-col">
                <span className="tw-inline-block tw-capitalize tw-font-bold tw-text-base">
                  {aspect} Skills
                </span>
              </span>
            </div>
          </h3>
          {skills.length !== 0 && (
            <ul className="tw-mt-2 tw-flex tw-flex-wrap" aria-label="Skills">
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
                    className="tw-flex tw-gap-2 tw-items-center tw-rounded-full dark:tw-bg-sky-400/10 tw-bg-sky-600/10 tw-px-4 tw-py-2 tw-text-xs tw-font-medium tw-leading-5 
                    dark:tw-text-sky-300 tw-text-sky-400"
                  >
                    <Image
                      alt={skill.label}
                      width={skill?.width || 15}
                      height={skill?.height || 15}
                      src={skill.iconPath}
                    />
                    {skill.label}
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.li>
  );
};
