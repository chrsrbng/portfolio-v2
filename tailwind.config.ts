import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "tw-",
  darkMode: ["class", '[class="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        bounceIn: {
          "0%": {
            opacity: "0",
          },
          "40%, 100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "20%": {
            transform: "translateY(-5px)",
            opacity: "1",
          },
        },
        blobBounce: {
          "0%": {
            transform: "translate(-100%, -100%) translate3d(0, 0, 0)",
          },
          "25%": {
            transform: "translate(-100%, -100%) translate3d(100%, 0, 0)",
          },
          "50%": {
            transform: "translate(-100%, -100%) translate3d(100%, 100%, 0)",
          },
          "75%": {
            transform: "translate(-100%, -100%) translate3d(0, 100%, 0)",
          },
          "100%": {
            transform: "translate(-100%, -100%) translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        rotate: "rotate 4s linear infinite",
        fadeIn: "fadeIn 1s ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
