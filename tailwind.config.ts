import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0B3D91",
          50: "#EEF3FD",
          100: "#D6E1F8",
          200: "#A7BEF0",
          300: "#7798E5",
          400: "#4B74DA",
          500: "#2452C6",
          600: "#1846A6",
          700: "#0B3D91",
          800: "#082F70",
          900: "#051E4A",
        },
        accent: {
          DEFAULT: "#F26A1F",
          50: "#FEF1E8",
          100: "#FCDCC4",
          200: "#F9B989",
          300: "#F69756",
          400: "#F47A2E",
          500: "#F26A1F",
          600: "#CE5511",
          700: "#9D400B",
        },
        emergency: {
          DEFAULT: "#DC2626",
          dark: "#991B1B",
        },
        ink: "#0F172A",
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -8px rgba(15, 23, 42, 0.12)",
        cta: "0 8px 24px -8px rgba(242, 106, 31, 0.55)",
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
