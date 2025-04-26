/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pyragogy: {
          light: '#f9a825', // giallo oro
          dark: '#0d47a1',  // blu profondo
        },
      },
      fontFamily: {
        pyragogy: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 165, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

