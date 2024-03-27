import { EXPERIENCE_CONSTANTS } from "@/shared/constants/experienceConstants";
import { faTimeline } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import Image from "next/image";

export default function Experience() {
  return (
    <div
      id="experience"
      className="section dark:tw-text-white/90 tw-h-auto tw-flex tw-flex-col tw-justify-center"
    >
      <div className="tw-font-bold tw-text-4xl dark:tw-text-gray-50 tw-flex tw-justify-center">
        Work Experience
      </div>
      <div
        className="tw-w-full tw-max-w-[1000px] tw-top-3 tw-flex tw-flex-col tw-items-center tw-justify-center
        tw-gap-4 tw-pt-4"
      >
        <Timeline position="alternate-reverse">
          {EXPERIENCE_CONSTANTS.map(
            (
              experience: {
                id: number;
                img: string;
                role: string;
                company: string;
                date: string;
                description: string;
                skills: string[];
              },
              index: number,
            ) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent sx={{ m: "auto 0" }}>
                  {experience.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot></TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <div
                    className="tw-w-[30rem] tw-rounded-xl tw-shadows-[0px_0px_10px_rgba(0,0,0,0.1)] tw-py-3 tw-px-4
                      tw-flex tw-relative tw-overflow-hidden tw-flex-col tw-gap-3 tw-border-[0.1px] 
                      tw-border-solid tw-border-white/10 tw-backdrop-blur-xl tw-bg-white/10 tw-text-left"
                  >
                    <div className="tw-flex tw-gap-3">
                      <div className="tw-w-20 tw-h-15 tw-rounded-md">
                        <Image
                          src={experience.img}
                          alt={experience.company}
                          height={20}
                          width={80}
                          className="tw-w-full tw-h-full tw-object-cover tw-rounded-md"
                        />
                      </div>

                      <div className="tw-flex tw-flex-col tw-w-full">
                        <div className="tw-text-lg tw-font-semibold dark:tw-text-gray-400">
                          {experience.role}
                        </div>
                        <div className="tw-text-sm tw-font-medium dark:tw-text-gray-400">
                          {experience.company}
                        </div>
                        <div className="tw-text-xs tw-font-normal dark:tw-text-gray-400">
                          {experience.date}
                        </div>
                      </div>
                    </div>
                    <div className="tw-w-full tw-text-sm tw-font-normal">
                      <div className="tw-overflow-hidden tw-w-full tw-text-ellipsis tw-text-gray-400">
                        {experience.description}
                      </div>
                      <br />
                      {experience?.skills.length !== 0 && (
                        <div className="tw-w-full tw-flex tw-gap-3 tw-flex-wrap">
                          <p
                            className="
                              tw-text-gray-400 tw-w-full tw-font-bold"
                          >
                            Skills:{" "}
                          </p>
                          {experience.skills.map((skill, index) => (
                            <div
                              key={index}
                              className="tw-text-sm tw-font-normal tw-text-gray-400"
                            >
                              • {skill}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ),
          )}
        </Timeline>
      </div>
    </div>
  );
}
