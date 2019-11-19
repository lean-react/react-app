const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',

  // Development:
  devServer: {
    contentBase: './dist'
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}
