const path = require("path");
const loaders = require("./loaders");
const plugins = require("./plugins");

module.exports = {
  entry: ["./src/index.js"],
  module: {
    rules: [loaders.CSSLoader, loaders.JSLoader, loaders.ESLintLoader],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    stats: {
      children: false, // Hide children information
      maxModules: 0, // Set the maximum number of modules to be shown
    },
    port: 9000,
  },
  plugins: [
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.HtmlPlugin,
  ],
};
