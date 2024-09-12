/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  },
  plugins: [require("tailwindcss-animate")],
}