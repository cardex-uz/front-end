/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'custom-pulse': 'custom-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'emerging': 'emersion 0.2s ',
        'move': 'moving 0.5s',
      },
      keyframes: {
        'custom-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .3 },
        },
        'emersion': {
          '0%': { opacity: 0, scale: 0, },
          '100%': { opacity: 1, scale: 1, },
        },
        'moving': {
          '0%': { transform: 'translateY(10rem)' },
          '100%': { transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}

