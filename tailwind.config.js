/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['GowunDodum-Regular', 'sans-serif'],
        'gowun': ['GowunDodum-Regular', 'sans-serif'],
        'catways': ['Catways', 'sans-serif'],
      },
      colors: {
        // Gray Scale
        gray: {
          100: '#ffffff',
          200: '#f9f9f9',
          300: '#eeeeee',
          400: '#cccccc',
          500: '#767676',
          600: '#555555',
          700: '#333333',
        },
        // Brand Colors
        brand: {
          100: '#ffe4e8',
          200: '#ffccd2',
          300: '#ff99a9',
          400: '#ff8094',
          500: '#ff6b81',
          600: '#e64e66',
          700: '#cc3a52',
          active: '#E63946',
        },
        // Sub Colors (Green)
        sub: {
          100: '#f4fbf4',
          200: '#dff3df',
          300: '#c8ecc8',
          400: '#b3e6b4',
          500: '#a2e2a4',
          600: '#74bf77',
          700: '#539c58',
        },
        // Semantic Colors
        semantic: {
          error: '#f03e3e',
          success: '#2baa67',
          caution: '#ffb648',
          info: '#3d9df6',
        },
      },
    },
  },
  plugins: [],
}

