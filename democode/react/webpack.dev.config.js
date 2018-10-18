/* eslint-disable */
const merge = require('webpack-merge');
const path = require('path');
const { Hot } = require('webpack');
const base = require('./webpack.base.config');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    // filename: '[name].bundle.js',
    // path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]_[hash:base64:5]',
              modules: true,
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    inline: true,
    // https://github.com/webpack/webpack/issues/1151
    // hot 开启需要在命令行加上 --hot
    hot: true,
    // open: true,
  },
});
