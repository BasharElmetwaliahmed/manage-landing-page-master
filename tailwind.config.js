/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:"576px",
      md:"768px",
      lg:"992px",
      xl:"1200px",
      "2xl":"1400px",
    },
    extend: {
      fontFamily:{
        veitnam:"'Be Vietnam Pro', sans-serif",
    },
    container:{
      center:true,
      padding:'1rem'
    },
    colors:{
      primaryred:'#f25f3a',
      primaryblue:'	#242d52',
      bluegrayish:"#9095a7",
      bluedark:"#1d1e25",
      redpale:'#ffefeb',

    }

    },
  },
  plugins: [],
}