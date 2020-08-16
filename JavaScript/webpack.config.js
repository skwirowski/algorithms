const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
      helpers: resolve(__dirname, 'helpers'),
    },
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: 'source-map',
};
