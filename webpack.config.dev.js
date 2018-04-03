const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: require.resolve("babel-loader"),
          options: {
            plugins: ['react-hot-loader/babel'  ]
          }
        }]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "public/index.html",
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("development")
    }),
    new ExtractTextPlugin('style.css')
  ],
  devServer: {
    contentBase: './public',
    publicPath: '/',
    watchContentBase: true
  }
}
