const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
          }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({template: './src/public/index.html'}),
  ],
};