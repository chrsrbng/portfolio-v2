"use client";

import {
  faClipboardList,
  faTimeline,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twJoin } from "tailwind-merge";
import { Link } from "react-scroll";

export default function Nav() {
  return (
    <nav className="tw-fixed tw-bottom-2 lg:bottom-8 tw-w-full tw-overflow-hidden tw-z-50">
      <div className="tw-mx-auto">
        <div
          className="tw-w-full tw-bg-black/20 tw-h-[55px] tw-backdrop-blur-2xl
        tw-rounded-full tw-max-w-[300px] tw-mx-auto
        tw-px-5 tw-flex tw-justify-between tw-text-2xl tw-text-white/50
        tw-items-center dark:tw-bg-white/10 "
        >
          <Link
            to="about"
            activeClass="link-active"
            smooth={true}
            spy={true}
            offset={-200}
            className={twJoin(
              "tw-w-[60px] tw-h-[60px] tw-flex tw-items-center tw-justify-center tw-group tw-cursor-pointer",
            )}
          >
            <FontAwesomeIcon
              icon={faUser}
              className="group-hover:tw-text-white tw-transition-all tw-ease-in-out tw-duration-300 dark:group-hover:tw-text-black "
            />{" "}
            About
          </Link>
          <Link
            to="skills"
            activeClass="link-active"
            smooth={true}
            spy={true}
            className={twJoin(
              "tw-w-[60px] tw-h-[60px] tw-flex tw-items-center tw-justify-center tw-group tw-cursor-pointer",
            )}
          >
            <div className="tw-flex">
              <FontAwesomeIcon
                icon={faClipboardList}
                className="group-hover:tw-text-white tw-transition-all tw-ease-in-out tw-duration-300 dark:group-hover:tw-text-black"
              />
              <span> Skills</span>
            </div>
          </Link>
          <Link
            to="experience"
            activeClass="link-active"
            smooth={true}
            spy={true}
            className={twJoin(
              "tw-w-[60px] tw-h-[60px] tw-flex tw-items-center tw-justify-center tw-group tw-cursor-pointer",
            )}
          >
            <FontAwesomeIcon
              icon={faTimeline}
              className="group-hover:tw-text-white tw-transition-all tw-ease-in-out tw-duration-300 dark:group-hover:tw-text-black"
            />{" "}
            Experience
          </Link>
        </div>
      </div>
    </nav>
  );
}
