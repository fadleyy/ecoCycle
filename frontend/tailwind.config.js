/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          main: "#A7D397",
          surface: "#EDF6EA",
          border: "#E2F0DC",
          hover: "#8BB07E",
          pressed: "#53694B",
          focus: "#A7D39733"
        }, secondary: {
          main: "#435334",
          surface: "#D9DDD6",
          border: "#C0C6BB",
          hover: "#38452B",
          pressed: "#21291A",
          focus: "#43533433",
        },
      },
      plugins: [],
    }
  }
}