const express = require('express')
const webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const webpackMerage = require('webpack-merge')
const webpackBaseConfig = require('./webpack-base.config')
const webpackDevConfig = require('./webpack-dev.config')

const port = 3001
const app = express()
const hotMiddlewareScript = `webpack-hot-middleware/client?reload=true&path=http://127.0.0.1:${port}/__webpack_hmr`
const webpackConfig = webpackMerage(webpackBaseConfig, webpackDevConfig)
webpackConfig.entry.app.push(hotMiddlewareScript)
const compilper = webpack(webpackConfig)

app.use(WebpackDevMiddleware(compilper, {
  publicPath: `http://127.0.0.1:${port}`,
  noInfo: true,
  stats: {
    colors: true
  }
}))
app.use(WebpackHotMiddleware(compilper))

app.listen(port, () => console.log('dev server on port:', port))
