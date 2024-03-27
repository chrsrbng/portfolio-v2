"use client";

import { useState } from "react";
import { twJoin } from "tailwind-merge";
import About from "./components/About-v2";
import Skills from "./components/Skills-v2";
import Header from "./components/Header-v2";
import Experience from "./components/Experience-v2";
import ContactMe from "./components/ContactMe";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <main className={twJoin(isDarkTheme && "dark")}>
      <div className="dark:tw-bg-slate-800 tw-transition-colors tw-duration-400 tw-bg-white">
        <div className="tw-fixed">
          {[...Array(100)].map((num) => (
            <div className="circle-container" key={num}>
              <div className="circle" key={num}></div>
            </div>
          ))}
        </div>
        <div
          className="tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-px-6 tw-py-12 tw-font-sans md:tw-px-12 
        md:tw-py-20 lg:tw-px-24 lg:tw-py-0 tw-text-slate-600"
        >
          <div className="lg:tw-flex lg:tw-justify-between lg:tw-gap-4">
            <Header setIsDarkTheme={setIsDarkTheme} />
            <div id="content" className="tw-pt-24 lg:tw-w-1/2 lg:tw-py-24">
              <About />
              <Experience />
              <Skills />
              <ContactMe />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
