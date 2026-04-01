import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#a04100",
        "primary-container": "#ff6b00",
        "secondary": "#005cae",
        "secondary-container": "#0074da",
        "tertiary": "#0e6c44",
        "tertiary-container": "#57a97b",
        "background": "#f9f9ff",
        "surface": "#f9f9ff",
        "surface-container-low": "#f0f3ff",
        "surface-container": "#e7eeff",
        "surface-container-high": "#dee8ff",
        "surface-container-highest": "#d8e3fa",
        "surface-container-lowest": "#ffffff",
        "on-background": "#111c2c",
        "on-surface": "#111c2c",
        "on-surface-variant": "#5a4136",
        "outline": "#8e7164",
        "outline-variant": "#e2bfb0",
        "inverse-surface": "#263142",
        "inverse-on-surface": "#ebf1ff",
        "error": "#ba1a1a",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-tertiary": "#ffffff",
        "surface-variant": "#d8e3fa",
        "primary-fixed": "#ffdbcc",
        "primary-fixed-dim": "#ffb693",
        "secondary-fixed": "#d5e3ff",
        "secondary-fixed-dim": "#a7c8ff",
        "tertiary-fixed": "#a0f4c1",
        "tertiary-fixed-dim": "#84d8a7",
      },
      fontFamily: {
        headline: ["Work Sans"],
        body: ["Inter"],
        label: ["Inter"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
