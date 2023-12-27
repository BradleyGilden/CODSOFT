/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'fg': '#f2f2f2',
        'bg': '#04040b',
        'primary': '#f0c000',
        'secondary': '#b8bbb9',
        'accent': '#b01719'
      },
      textColor : {
        'fg': '#f2f2f2',
        'bg': '#04040b',
        'primary': '#f0c000',
        'secondary': '#b8bbb9',
        'accent': '#b01719'
      }
    },
    fontFamily: {
      'header': ['"Montserrat Alternates"', 'sans-serif'],
      'body': ['Inter', 'sans-serif']
    },
    backgroundImage: {
      'hero-img': "url('../images/gymlayout.jpg')",
    }

  },
  plugins: [],
}
