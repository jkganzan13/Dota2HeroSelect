const webpack = require('webpack');
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
  	loaders : [
  		{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },
      { test: /\.(png|jpg)$/, loader: 'url?limit=10000000000' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000000000" }
  	]
  }
};

module.exports = config;
