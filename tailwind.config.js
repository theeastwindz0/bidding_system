/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'smrev': {'max':'640px'},
        'mdrev': {'max':'768px'},
      },
      colors:{
        primary:'#06283D',
        secondary:'#1363DF',
        teritary:'#47B5FF',
        quaternery:'#232323',
        buttonshade:'#c00000'
      }
    },
  },
  plugins: [],
}
