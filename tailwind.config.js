/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#AC87C5",
        //- burada exted ettiğimizi tailwind classı gibi kullanabiliyoruz. 
      }
    },
  },
  plugins: [],
  darkMode: 'class',

  //- moda göre çalışır.
  
};
