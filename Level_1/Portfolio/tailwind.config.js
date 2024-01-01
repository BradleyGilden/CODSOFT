/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'space-dark': '#07041E',
        'space-purple': '#280A33',
        'space-violet': '4F0832',
        'space-red': 'AA0707',
        'space-pink': 'E00A27'
      },
      textColor : {
        'white-pure': '#FFFFFF',
        'white-soft': '#F5F5F5',
        'white-warm': '#EDEDED',
        'white-grey': '#E6E6E6',
        'light-grey': '#CCCCCC',
        'space-dark': '#07041E',
        'space-purple': '#280A33',
        'space-violet': '4F0832',
        'space-red': 'AA0707',
        'space-pink': 'E00A27'
      },
      fontSize: {
        '4xl': '3rem',
        '5xl': '3.5rem'
      }
    },
    fontFamily: {
      'header': ['Poppins', 'sans-serif'],
      'body': ['Inter', 'sans-serif'],
    },
    backgroundImage: {}

  },
  plugins: [],
}
