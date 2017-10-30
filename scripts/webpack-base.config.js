const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: './'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks: (module, count) => {
        return (
          module.resource &&
          module.resource.indexOf(path.resolve('node_modules')) === 0
        )
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_module/
      },
      {
        test: /\.html/,
        use: 'html-loader?attrs=false'
      }
    ]
  }
}
