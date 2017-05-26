const path = require('path')

function resolve (path) {
  return path.join(__dirname, path)
}

module.exports = {
  entry: {
    app: 'src/index.js'
  },

  output: {
    path: __dirname,
    filename: '[name.js]'
  },

  resolve: {

  },

  module: {
    loaders:
    {
      test: /\.(vue|js)$/,
      loader: 'eslint'
    },
    {
      test: /\.vue$/,
      loader: 'vue'
    },
    {
      test: /\.js$/,
      loader: 'babel'
    },
    {
      test: /\.jade$/,
      loader: 'jade'
    },
    {
      test: /\.styl$/,
      loader: 'stylus'
    }
  }
}
