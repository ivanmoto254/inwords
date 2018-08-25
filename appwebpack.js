const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const devMiddleware = require('webpack-dev-middleware')
const compiler = webpack(webpackConfig)

module.exports = function (app) {

  app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    logLevel: 'silent'
  }))
  app.use(require('webpack-hot-middleware')(compiler))
  
}
