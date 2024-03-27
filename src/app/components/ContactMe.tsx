import { fadeIn } from "@/shared/helpers/variants";
import { motion } from "framer-motion";
import React, { FormEvent } from "react";

interface CustomElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export default function ContactMe() {
  const handleSubmit = async (event: FormEvent<CustomForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;

    const result = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: target.email.value,
        subject: target.subject.value,
        message: target.message.value,
      }),
    });

    console.log(await result.json());
  };

  return (
    <section
      id="contact"
      className="tw-mb-16  md:tw-mb-24 lg:tw-mb-36 lg:tw-scroll-mt-24 contact-container"
      aria-label="Contact me"
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
            Contact
          </h2>
        </div>
      </motion.div>
      <div className="tw-group tw-relative tw-flex tw-pb-1 tw-transition-all lg:hover:!tw-opacity-100 lg:group-hover/list:tw-opacity-50">
        <div
          className="tw-absolute -tw-inset-x-4 -tw-inset-y-4 tw-z-0 tw-hidden tw-rounded-md tw-transition motion-reduce:tw-transition-none lg:-tw-inset-x-6 lg:tw-block 
                dark:lg:group-hover:tw-bg-slate-800/90 lg:group-hover:tw-bg-slate-800/10 lg:group-hover:tw-shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:tw-drop-shadow-lg"
        ></div>
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="tw-z-10 sm:tw-col-span-6 tw-w-full tw-group/contact"
        >
          <motion.h3
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="tw-font-medium tw-leading-snug tw-text-slate-200"
          >
            <div
              className="tw-inline-flex tw-items-baseline tw-font-medium tw-leading-tight tw-text-slate-400 
              hover:tw-text-sky-400 focus-visible:tw-text-sky-400 tw-text-base"
              aria-label="Contact me link"
            >
              <span className="lg:tw-flex tw-flex-col tw-hidden">
                <span className="tw-font-bold header">Contact Me</span>
              </span>
            </div>
          </motion.h3>
          <form
            onSubmit={handleSubmit}
            className="tw-flex tw-flex-col tw-gap-3 tw-w-full"
          >
            <motion.div
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="tw-w-full tw-flex tw-flex-col tw-gap-2"
            >
              <label htmlFor="email" className="tw-text-slate-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="johndoe@email.com"
                className="dark:tw-bg-slate-900/90 tw-border tw-border-sky-400 focus:tw-border-sky-6666hover:tw-border-sky-600 tw-border-solid 
                dark:tw-text-slate-400 tw-text-sm tw-rounded-lg tw-block tw-py-2.5 tw-px-2 focus:tw-shadow-[0_0_0_2px]
                focus:tw-shadow-sky-400/90 focus-within:tw-border-none focus:tw-outline-none placeholder:tw-text-slate-400/60
                tw-bg-slate-100/90"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 1.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="tw-w-full tw-flex tw-flex-col tw-gap-2"
            >
              <label htmlFor="email" className="tw-text-slate-600">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Email Subject"
                className="dark:tw-bg-slate-900/90 tw-border tw-border-sky-400 focus:tw-border-sky-600 hover:tw-border-sky-600 tw-border-solid 
                dark:tw-text-slate-400 tw-text-sm tw-rounded-lg tw-block tw-py-2.5 tw-px-2 focus:tw-shadow-[0_0_0_2px]
                focus:tw-shadow-sky-400/90 focus-within:tw-border-none focus:tw-outline-none placeholder:tw-text-slate-400/60
                tw-bg-slate-100/90"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 1.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="tw-w-full tw-flex tw-flex-col tw-gap-2"
            >
              <label htmlFor="email" className="tw-text-slate-600">
                Message
              </label>
              <textarea
                cols={30}
                rows={10}
                name="message"
                id="messageBox"
                required
                placeholder="Hi!"
                className="dark:tw-bg-slate-900/90 tw-border tw-border-sky-400 focus:tw-border-sky-600 hover:tw-border-sky-600 tw-border-solid 
                dark:tw-text-slate-400 tw-text-sm tw-rounded-lg tw-block tw-py-2.5 tw-px-2 focus:tw-shadow-[0_0_0_2px]
                focus:tw-shadow-sky-500/90 focus-within:tw-border-none focus:tw-outline-none placeholder:tw-text-slate-400/60
                tw-bg-slate-100/90 tw-resize-none"
              />
            </motion.div>
            <motion.button
              variants={fadeIn("left", 1.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              type="submit"
              className="tw-block dark:tw-bg-slate-900/90 tw-border tw-border-sky-400 focus:tw-border-sky-600 hover:tw-border-sky-600 tw-border-solid 
                tw-text-sm tw-rounded-lg tw-py-2.5 tw-px-2 focus:tw-shadow-[0_0_0_2px]
                focus:tw-shadow-sky-400/90 focus-within:tw-border-none focus:tw-outline-none placeholder:tw-text-slate-400/60
                tw-bg-slate-100/90 tw-w-32 tw-text-sky-400"
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
