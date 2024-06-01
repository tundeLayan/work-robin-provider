import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
        manrope: ["Manrope"],
      },
      colors: {
        primary: {
          50: "#920AF2",
          100: "#7F56D9",
          150: "#E5BFFF",
          200: "#6941C6",
          250: "#F3F3FE",
          300: "#F9F5FF",
          400: "#F56630",
          500: "#CCCCF5",
          600: "#F8F8FD",
        },
        secondary: {
          50: "#25324B",
          100: "#111827",
          150: "#0F172A",
        },
        neutral: {
          50: "#F0E6E6",
          100: "#E4DBDB",
          150: "#667185",
          200: "#E5E1E6",
          250: "#94A3B8",
          300: "#475367",
          350: "#D6DDEB",
          400: "#E2E8F0",
          450: "#FAFAFA",
          500: "#687588",
          550: "#F1F2F4",
          600: "#344054",
          650: "#F4F4F4",
          700: "#A29999",
        },
        tertiary: {
          50: "#3E3838",
          100: "#2F3EFF",
        },
        pending: {
          50: "#FFB836",
        },
        danger: {
          50: "#EB5017",
          100: "#C00100",
          150: "#BA1A1A",
        },
        success: {
          50: "#E7F7EF",
          100: "#0CAF60",
        },
        green: {
          2: "#27AE60",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
