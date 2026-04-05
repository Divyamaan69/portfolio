import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      "#E9E4DC",
        bg2:     "#E0DAD0",
        sec:     "#BAC6B8",
        acc:     "#8BA794",
        pri:     "#3A3456",
        "pri-light": "#564f7a",
        muted:   "#6b6780",
        card:    "#f0ece4",
        border:  "#d0cac0",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body:    ["var(--font-cormorant)", "serif"],
        mono:    ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
