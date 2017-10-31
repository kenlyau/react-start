const WebPack = require('webpack')
const webpackMerage = require('webpack-merge')
const webpackBaseConfig = require('./webpack-base.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const settings = {
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new WebPack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new WebPack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  }
}

module.exports = webpackMerage(webpackBaseConfig, settings)
