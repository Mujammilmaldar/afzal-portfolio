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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              color: '#111827',
            },
            h2: {
              color: '#111827',
            },
            h3: {
              color: '#111827',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
