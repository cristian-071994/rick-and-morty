/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'fira-code': ['Fira Code', 'monospace'],
    },
    keyframes: {
      keyFrameSpin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      }
    },
    animation:{
      spin_edit:"keyFrameSpin 5s linear infinite"
    }
  },
  plugins: [],
}

