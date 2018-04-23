const path = require('path');
const webpack = require('webpack');

const context = path.resolve(__dirname, 'src');

module.exports = {
  devtool: 'eval-source-map',
  context,
  mode: 'development',
  entry: {
    app: [
      'react-hot-loader/patch',
      './index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      Containers: path.resolve(context, 'containers')
    },
    extensions: [".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, enforce: 'pre', loader: 'eslint-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
};
