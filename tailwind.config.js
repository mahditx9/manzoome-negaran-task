/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-primary": "#354150",
        "light-primary": "#F6F6F6",
        "yellow-primary": "#FAF603",
        "gray-primary": "#979797",
        "white-primary": {
          100: "#F7F8FA",
          200: "#E9E9E9",
        },
      },
      boxShadow: {
        "shadow-dark-50": "0px 0px 10px 0px #35426033/10",
        "shadow-dark-200": "0px 0px 10px 0px #35426033",
        "shadow-dark-300": "0px 30px 60px 0px #354150",
        "dark-400": "0px 56px 96px 0px #1C083A29",
      },
    },
    borderRadius: {
      none: "0",
      DEFAULT: "15px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "22px",
      full: "9999px",
    },
  },
  plugins: [],
};
