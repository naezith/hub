var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ 
        template: './src/index.html', 
        filename: './index.html' 
      })
  ]
  }