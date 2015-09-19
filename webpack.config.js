var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/browser',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'seek.js',
    library: 'seek',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
