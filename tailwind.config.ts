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
        epilogue: ["Epilogue"],
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
          650: "#2E2C34",
          700: "#515B6F",
        },
        secondary: {
          50: "#25324B",
          100: "#111827",
          150: "#0F172A",
          200: "#E3EFFC", // NOTE: this was secondary-50 on the figma
          250: "#5CB176", // NOTE: this was secondary-50 on the figma
          300: "#FC8800",
        },
        warning: {
          50: "#FEF6E7",
          500: "#DD900D",
        },
        neutral: {
          50: "#F0E6E6",
          100: "#E4DBDB",
          150: "#667185",
          200: "#E5E1E6",
          250: "#94A3B8",
          350: "#D6DDEB",
          400: "#E2E8F0",
          450: "#FAFAFA",
          500: "#687588",
          550: "#F1F2F4",
          600: "#344054",
          650: "#F4F4F4",
          700: "#A29999",
          750: "#F9FAFB",
          800: "#F2F4F7",
          850: "#B5B6B7",
          900: "#F1F5F9",
          950: "#E6E8EC",
          1000: "#84818A",
          1050: "#B7C0D3",
          1100: "#EAEBF0",
        },
        tertiary: {
          50: "#3E3838",
          100: "#2F3EFF",
          150: "#150A33",
          200: "#FEF6E7",
          250: "#865503",
        },
        pending: {
          50: "#FFB836",
        },
        danger: {
          50: "#EB5017",
          100: "#C00100",
          150: "#BA1A1A",
          200: "#CC400C",
          250: "#FCB59A",
        },
        success: {
          50: "#E7F7EF",
          100: "#0CAF60",
        },
        green: {
          2: "#27AE60",
        },
        grey: {
          100: "#F0F2F5",
          500: "#667185",
          600: "#475367",
          800: "#1D2739",
          900: "#101928",
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
