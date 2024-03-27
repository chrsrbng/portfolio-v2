import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/shared/helpers/variants";

export default function Header({
  setIsDarkTheme,
}: {
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="tw-py-5 tw-flex tw-justify-between"
    >
      <Image
        className="tw-cursor-pointer dark:tw-invert"
        src="/logo.png"
        alt="Chris"
        width={100}
        height={24}
      />
      <ul className="tw-flex tw-justify-center tw-gap-3 tw-items-center">
        <li>
          <FontAwesomeIcon
            icon={faCircleHalfStroke}
            className="tw-h-6 tw-cursor-pointer dark:tw-text-slate-200"
            onClick={() => setIsDarkTheme((prevState) => !prevState)}
          />
        </li>
      </ul>
    </motion.div>
  );
}
