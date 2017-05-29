var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var ROOT_PATH = __dirname
var PUBLISH_PATH = path.join(__dirname, 'static')
var SRC_PATH = path.join(__dirname, 'src')

module.exports = {
  entry: {
    app: path.join(SRC_PATH, 'index.js')
  },

  output: {
    path: PUBLISH_PATH,
    filename: '[name].js'
  },

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      'src': SRC_PATH
    },
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
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css-loader!stylus-loader')
        loader: 'css-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'url-loader'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(PUBLISH_PATH),
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      template: path.join(SRC_PATH, 'index.jade'),
      inject: true,
      filename: 'index.html'
    })
  ]
}
