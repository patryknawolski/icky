var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/js/plugin.js',
  devtool: 'source-map',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'plugin.js'
  },
  devServer: {
    contentBase: 'demo/',
    inline: true
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('plugin.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  eslint: {
    configFile: './.eslintrc'
  }
}
