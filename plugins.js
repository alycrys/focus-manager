const path = require('path');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: 'main.bundle.css',
});

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, './src'),
  files: '*.css',
  failOnError: false,
  quiet: false,
});

const HtmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html"
})

module.exports = {
  MiniCssExtractPlugin,
  StyleLintPlugin,
  HtmlPlugin
};
