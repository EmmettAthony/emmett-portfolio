/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      blue: '#1fb6ff',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      gray: '#8492a6',
      graylight: '#d3dce6'
    },
    screens:{
      sm: '640px', // => @media (min-width: 640px)
      md: '768px', // => @media (min-width: 768px)
      lg: '1024px', // => @media (min-width: 1024px)
      xl: '1280px', // => @media (min-width: 1280px)
      '2xl': '1530px', // => @media (min-width: 1530px)
      '3xl': '1600px', // => @media (min-width: 1600px)
    },
    extend: {},
    fontFamily: {
      greatvibes: ["Great Vibes"],
      kurale: ["Kurale"],
    },
  },
  plugins: [],
}

