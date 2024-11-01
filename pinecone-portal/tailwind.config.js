/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'lime': {
            400: '#a3e635',
          },
          'gray': {
            800: '#1f2937',
            900: '#111827',
          }
        },
        animation: {
          'glow': 'glow 2s ease-in-out infinite alternate',
        },
        keyframes: {
          glow: {
            '0%': { opacity: 0.8 },
            '100%': { opacity: 0.4 },
          }
        }
      },
    },
    plugins: [],
  }