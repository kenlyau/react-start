const webpackMerage = require('webpack-merge')
const webpackBaseConfig = require('./webpack-base.config')

const settings = {}

module.exports = webpackMerage(webpackBaseConfig, settings)
