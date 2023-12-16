/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner-photo': "url('./public/img/Photo.png')"
      }
    },
  },
  plugins: []
}