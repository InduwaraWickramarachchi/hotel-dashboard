/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        moveUpStayDown: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '10%': { transform: 'translateY(0)', opacity: 1 },
          '90%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(100%)', opacity: 0 },
        },
      },
      animation: {
        moveUpStayDown: 'moveUpStayDown 6s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
