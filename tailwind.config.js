/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.html'],
  theme: {
    extend: {
      keyframes: {
        'rotating-crown': {
          '0%, 100%': { transform: 'rotate(-15deg)'},
          '50%': { transform: 'rotate(15deg)'},
        },
      },
      animation: {
        'rotating-crown': 'rotating-crown 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
