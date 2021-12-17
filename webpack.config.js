const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  devServer: {
    static: './dist'
  },
  entry: ['./src/typescript/index.ts'],

  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  output: {
    publicPath: '',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // favicon: './favicon.png',
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'web'
}