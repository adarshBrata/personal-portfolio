module.exports = {
  plugins: {
    'postcss-import': {
      filter: (path) => !path.includes('tailwindcss'),
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};