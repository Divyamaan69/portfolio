import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F5F5F5",
        bg2: "#DAD7CD",
        sec: "#A3B18A",
        acc: "#588157",
        pri: "#3A5A40",
        "pri-light": "#588157",
        muted: "#5a6b5a",
        card: "#F5F5F5",
        border: "#c8c4b8",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
