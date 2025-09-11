/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f0f0f',
        secondary: '#181824ff',
        hover: '#2f2f2f',
        code: '#1a1a1a',
        accent: '#4a9eff',
        'text-primary': '#f8f8f8',
        'text-secondary': '#f0f0f0',
        'text-muted': '#c8c8c8',
        border: '#383838',
      },
    },
  },
  plugins: [],
}
