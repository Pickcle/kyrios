const path = require('path')

const ROOT_PATH = __dirname
const PUBLISH_PATH = path.join(__dirname, 'static')
const SRC_PATH = path.join(__dirname, 'src')

module.exports = {
  entry: {
    app: path.join(SRC_PATH, 'index.js')
  },

  output: {
    path: PUBLISH_PATH,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.vue', '.styl', '.jade']
  },

  module: {
    loaders: [
      // {
      //   test: /\.(vue|js)$/,
      //   loader: 'eslint'
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      },
      {
        test: /\.styl$/,
        loader: 'stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'url-loader'
      }
    ]
  }
}
