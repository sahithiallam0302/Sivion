/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1128',
          800: '#0D1B3E',
          700: '#0F2057',
        },
        cyan: {
          400: '#06B6D4',
          500: '#0891B2',
        }
      }
    }
  },
  plugins: []
}
