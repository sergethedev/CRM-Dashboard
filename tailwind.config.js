module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '15': '10rem',
        '85': '21.25rem',
        '81': '22rem',
        '82': '32.3rem',
      },
      margin: {
        '30': '7.5rem',
        '35': '6.55rem',
        '34': '2.55rem',
      },
      colors: {
        'nav': '#171b2e', // Using RGB directly
        'background': '#111526',
        'box': "#171c31",
        'pinkText': '#A457A0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
