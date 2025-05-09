/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  extend: {
    utilities: {
      '.backface-hidden': {
        'backface-visibility': 'hidden',
      },
      '.rotate-y-180': {
        transform: 'rotateY(180deg)',
      },
    },
  },
};

module.exports = {
  theme: {
    extend: {
      colors: {
        lighttype: 'var(--color-primary-two)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        dark:'var(--color-dark)',
      },
    },
  },
};
