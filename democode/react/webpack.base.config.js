/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        include: PATHS.app,
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'eslint-loader',
          },
        ],
        include: PATHS.app,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.temp.html',
    }),
  ],
};

// 配置可参考
// https://github.com/survivejs-demos/redux-demo/blob/master/kanban_app/webpack.config.js
