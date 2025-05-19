/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a78bfa', // violet-400
          dark: '#7c3aed',   // violet-600
        },
        bgdark: '#232228',
        bglight: '#18171c',
      },
    },
  },
  plugins: [],
} 