import { fadeIn } from "@/shared/helpers/variants";
import Skill from "../containers/Skill";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div id="skills" className="section tw-h-auto tw-flex tw-flex-col tw-gap-3">
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="tw-font-bold tw-text-4xl dark:tw-text-gray-50 tw-flex tw-justify-center"
      >
        Skills
      </motion.div>
      <div className="tw-flex tw-flex-wrap tw-justify-center dark:tw-text-gray-300 tw-gap-5">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="card"
        >
          <div className="card-content">
            <div className="tw-text-2xl tw-font-bold tw-flex tw-justify-center tw-m-2">
              Frontend
            </div>
            <div className="tw-flex tw-flex-wrap tw-gap-3 tw-justify-center">
              <Skill
                path="/icons/skill-icons--react-dark.svg"
                label="React JS"
              />
              <Skill
                path="/icons/logos--react-query-icon.svg"
                label="React Query"
              />
              <Skill
                path="/icons/skill-icons--tailwindcss-dark.svg"
                label="Tailwind CSS"
              />
              <Skill path="/icons/skill-icons--css.svg" label="CSS" />
              <Skill path="/icons/skill-icons--html.svg" label="HTML" />
              <Skill
                path="/icons/skill-icons--bootstrap.svg"
                label="Bootstrap"
              />
              <Skill
                path="/icons/skill-icons--materialui-dark.svg"
                label="Material UI"
              />
              <Skill
                path="/icons/skill-icons--netlify-dark.svg"
                label="Netlify"
              />
              <Skill
                path="/icons/skill-icons--nextjs-dark.svg"
                label="Next JS"
              />
              <Skill path="/icons/skill-icons--redux.svg" label="Redux" />
              <Skill path="/icons/devicon--antdesign.svg" label="And Design" />
            </div>
          </div>
          <div className="card-bg"></div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="card"
        >
          <div className="card-content">
            <div className="tw-text-2xl tw-font-bold tw-flex tw-justify-center tw-m-2">
              Backend
            </div>
            <div className="tw-flex tw-flex-wrap tw-gap-3 tw-justify-center">
              <Skill
                path="/icons/skill-icons--nodejs-dark.svg"
                label="Node JS"
              />
              <Skill
                path="/icons/skill-icons--expressjs-dark.svg"
                label="Express JS"
              />
              <Skill path="/icons/skill-icons--mongodb.svg" label="MongoDB" />
              <Skill
                path="/icons/skill-icons--postgresql-dark.svg"
                label="PostgreSQL"
              />
              <Skill path="/icons/skill-icons--mysql-dark.svg" label="MySQL" />
              <Skill
                path="/icons/logos--firebase.svg"
                label="Firebase"
                width={18}
                height={17}
              />
            </div>
          </div>
          <div className="card-bg"></div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="card"
        >
          <div className="card-content">
            <div className="tw-text-2xl tw-font-bold tw-flex tw-justify-center tw-m-2">
              Others
            </div>
            <div className="tw-flex tw-flex-wrap tw-gap-3 tw-justify-center">
              <Skill path="/icons/skill-icons--docker.svg" label="Docker" />
              <Skill
                path="/icons/skill-icons--gcp-dark.svg"
                label="Google Cloud Platform"
              />
              <Skill path="/icons/skill-icons--git.svg" label="Git" />
              <Skill path="/icons/skill-icons--npm-dark.svg" label="NPM" />
              <Skill
                path="/icons/skill-icons--typescript.svg"
                label="TypeScript"
              />
              <Skill
                path="/icons/skill-icons--vscode-dark.svg"
                label="VsCode"
              />
              <Skill path="/icons/skill-icons--postman.svg" label="Postman" />
            </div>
          </div>
          <div className="card-bg"></div>
        </motion.div>
      </div>
    </div>
  );
}
