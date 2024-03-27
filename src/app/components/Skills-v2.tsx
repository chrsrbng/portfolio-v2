import { SKILLS } from "@/shared/constants/Skills";
import { SkillCard } from "../containers/SkillsCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="tw-mb-16 tw-scroll-mt-16 md:tw-mb-24 lg:tw-mb-36 lg:tw-scroll-mt-24"
      aria-label="About Me"
    >
      <div className="tw-sticky tw-top-0 tw-z-20">
        <div
          className=" -tw-mx-6 tw-mb-4 tw-w-screen tw-bg-slate-900/75
        tw-px-6 tw-py-5 tw-backdrop-blur md:-tw-mx-12 md:tw-px-12 lg:tw-sr-only lg:tw-relative
        lg:tw-top-auto lg:tw-mx-auto lg:tw-w-full lg:tw-px-0 lg:tw-py-0 lg:tw-opacity-0 tw-text-white"
        >
          <h2 className="tw-text-sm tw-font-bold tw-uppercase tw-tracking-widest tw-text-slate-200 lg:sr-only">
            Skills
          </h2>
        </div>
      </div>
      <div>
        <ol className="tw-group/list">
          {Object.entries(SKILLS).map(([key, skills], index) => (
            <SkillCard key={index} aspect={key} skills={skills} />
          ))}
        </ol>
      </div>
    </section>
  );
}
