/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        ink: '#312c36',
        blush: '#ed9d8c',
        cream: '#fbf6ef',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(71, 49, 54, 0.10)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        birthday: {
          primary: '#c77871',
          secondary: '#927d9b',
          accent: '#e9b86e',
          neutral: '#312c36',
          'base-100': '#fbf6ef',
          'base-200': '#f4ece4',
          'base-content': '#312c36',
        },
      },
    ],
  },
}
