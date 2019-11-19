const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}
