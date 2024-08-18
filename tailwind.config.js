/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-fk-grotesk)'],
      },
      colors: {
        black: '#000000',
        'custom-green': '#00ec97',
        'custom-purple': '#9696fe',
        'custom-light-purple': '#9797ff',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}