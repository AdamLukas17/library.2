/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'media',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7222',
      'green': '#13ce66',
      'yellow': '#ffb721',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'pale-blue': '#61bfad',
      'pale-cream': '#f9f7e8',
      'rose-pink': '#ff8b8b',
    },
    fontFamily: {
      overpass: ['Overpass Mono', "monospace"],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: '#ff4800',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}



