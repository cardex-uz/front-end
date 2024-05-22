/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comfortaa': ['Comfortaa', 'sans-serif'],
      },
      animation: {
        'custom-pulse': 'custom-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'custom-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .3 },
        },
      }
    },
  },
  plugins: [],
}

