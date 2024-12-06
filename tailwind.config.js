/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'navbar-shadow': '0px 4px 6.3px 0px rgba(56, 8, 8, 0.66)',
      },
      colors: {
        brown: {
          500: '#A52A2A',
          600: '#8B0000',
        },
      },
    },

  },
  plugins: [],
}

