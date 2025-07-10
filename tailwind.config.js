/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.md",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        lighttype: 'var(--color-primary-two)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
      },
    },
  },
  plugins: [],
};
