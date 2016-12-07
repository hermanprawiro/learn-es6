var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  devtool: 'source-map',
  output: {
    filename: './dist/main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ['latest']
        }
      }
    ]
  }
};
