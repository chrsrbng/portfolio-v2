module.exports = {
  plugins: {
    "tailwindcss/nesting": "postcss-nesting",
    "postcss-preset-env": {
      features: {
        "nesting-rules": false,
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
