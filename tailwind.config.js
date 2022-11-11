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
        primary:'#c72229',
        secondary:'#da8f89',
        teritary:'#6a4743',
        quaternery:'#201e19',
        buttonshade:'#c00000'
      }
    },
  },
  plugins: [],
}
