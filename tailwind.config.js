/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    'src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Product Sans', 'NanumSquareNeo', 'Paperlogy'],
      'serif': ['Product Sans', 'NanumSquareNeo', 'Paperlogy'],
      'mono': ['Product Sans', 'NanumSquareNeo', 'Paperlogy'],
      'display': ['Product Sans', 'NanumSquareNeo', 'Paperlogy'],
      'body': ['Product Sans', 'NanumSquareNeo', 'Paperlogy'],
    },
    darkMode: 'class',
  },
  plugins: [
    require('flowbite/plugin')
  ],
}