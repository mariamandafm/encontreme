/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/*.tsx",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryBlue: "var(--primary-blue)",
        box: "var(--box)",
        stroke: "var(--stroke)",
      },
      fontFamily: {
        logo: ['var(--font-syne)'],
      },
    },
  },
  plugins: [],
};
