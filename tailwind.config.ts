import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020617",
          900: "#0a1628",
          800: "#0f2744",
          700: "#132f52"
        },
        brand: {
          cyan: "#22d3ee",
          teal: "#06b6d4",
          electric: "#38bdf8"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 45px -12px rgba(34, 211, 238, 0.45)",
        card: "0 4px 24px -8px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
