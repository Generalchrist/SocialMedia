/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '100rem',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#744BFC',
        'secondary': '#F5F7FF',
      },
    },
  },
  plugins: [],
}

