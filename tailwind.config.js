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
        'custom-blue-1': 'rgb(17,21,37)', // Using RGB directly
        'custom-blue-2': '#161c31',  
        'custom-blue-3': '#171B2E',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
