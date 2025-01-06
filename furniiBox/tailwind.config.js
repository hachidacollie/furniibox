/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flyonui/dist/js/*.js',
  ],
  plugins: [
    require('flyonui'),
    require('flyonui/plugin')
  ],
//   // flyonui: {
//     themes: []
//   }
  
}
