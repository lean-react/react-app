const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',

  // Development:
  devServer: {
    contentBase: './dist'
  },

  // Loaders
  module: {
    rules: [
      {
        test: /\.js(x)?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}
