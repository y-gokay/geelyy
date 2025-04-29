/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css,scss}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        geelyBold: ["var(--geely-bold)"],
        geelyBoldAlt: ["var(--geely-bold-2)"],
        geelyLight: ["var(--geely-light)"],
        geelyNormal: ["var(--geely-normal)"],
        inter: ["var(--inter)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        success: {
          DEFAULT: "#68786A",
          50: "#4D584E",
        },
        info: {
          DEFAULT: "#BCC7D6",
          50: "#EBEEF3",
        },
        dark: "#231815",
        secondary: {
          DEFAULT: "#E4E4E4",
          50: "#E0E0E0",
        },
        danger: "#E80000",
        "dark-primary": "#231816",
      },
      boxShadow: {
        xxs: "0px 12px 24px 0px rgba(16, 24, 40, 0.04)",
        "xxs-2": "0px 20px 40px 0px rgba(16, 24, 40, 0.05)",
      },
      // bootstrap breakpoints
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "3xl": "1600px",
      },
      backgroundImage: {
        "orange-gradient":
          "linear-gradient(to right, #ffc85c 0%,#ff6432 100%);",
      },
    },
  },
  plugins: [
    require("tailwind-bootstrap-grid")({
      gridGutters: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        70: "70px",
      },
      containerMaxWidths: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1384px",
        "2xl": "1384px",
        "3xl": "1384px",
      },
    }),
  ],
};
