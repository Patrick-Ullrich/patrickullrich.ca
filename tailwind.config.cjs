/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        brand: {
          red: "rgb(238, 68, 81)",
          blue: "rgb(4, 43, 59)",
          teal: "rgb(119, 182, 190)",
        },
      },
      backgroundColor: {
        brand: {
          red: "rgb(238, 68, 81)",
          blue: "rgb(4, 43, 59)",
          teal: "rgb(119, 182, 190)",
        },
      },
      bg: {
        brand: {
          red: "rgb(238, 68, 81)",
          blue: "rgb(4, 43, 59)",
          teal: "rgb(119, 182, 190)",
        },
      },
      ringColor: {
        brand: {
          red: "rgb(238, 68, 81)",
          blue: "rgb(4, 43, 59)",
          teal: "rgb(119, 182, 190)",
        },
      },
      borderColor: {
        brand: {
          red: "rgb(238, 68, 81)",
          blue: "rgb(4, 43, 59)",
          teal: "rgb(119, 182, 190)",
        },
      },
      fill: {
        brand: {
          red: "rgb(238, 68, 81)",
          blue: "rgb(4, 43, 59)",
          teal: "rgb(119, 182, 190)",
        },
      },
    },
  },
  plugins: [],
};
