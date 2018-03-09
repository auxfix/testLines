const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ["./src/js/app.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devServer: {
    contentBase: "./dist"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
          use:[
            {
              loader: "css-loader",
              options:{
                modules: true,
                localIdentName: '[name]_[local]_[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        }) 
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
          use:[
            {
              loader: "css-loader",
              options:{
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]_[local]_[hash:base64:5]'
              }
            },
            'sass-loader'
          ]
        }) 
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin('lineStyles.css')
  ]
};