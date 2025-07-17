/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['GowunDodum-Regular', 'system-ui', 'sans-serif'],
        'gowun': ['GowunDodum-Regular', 'system-ui', 'sans-serif'],
        'catways': ['Catways', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

