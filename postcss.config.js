module.exports = {
  plugins: [
    require('autoprefixer'),
    require("postcss-import"),
    require("postcss-url"),
    require("postcss-cssnext"),
    // and if you want to compress
    require('cssnano'),
    require("postcss-browser-reporter")
  ]
};
