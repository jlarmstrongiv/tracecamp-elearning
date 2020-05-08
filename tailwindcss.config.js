const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter var',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'first', 'hover', 'focus'],
  },
  plugins: [
    // https://tailwindui.com/documentation
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    }),
  ],
};
