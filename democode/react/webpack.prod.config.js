/* eslint-disable */
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const path = require('path');

const base = require('./webpack.base.config');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              singleton: true,
            },
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[local]_[hash:base64:5]',
                modules: true,
                minimize: true,
              },
            },
            {
              loader: 'less-loader',
            },
          ],
        }),
        include: PATHS.app,
      },
    ],
  },
  plugins: [
    new Clean([PATHS.build]),
    new BundleAnalyzerPlugin(),
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css',
    }),
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all',
    },
    minimize: true,
  },
});
