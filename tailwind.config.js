/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      gridTemplateColumns: {
        "auto-fit-minmax": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
};
