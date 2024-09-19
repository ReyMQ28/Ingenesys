/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      'sm': '350px',
      'md': '650px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      //Media query personalizado
      'custom': '900px',
    }
  },
  plugins: [],
};
