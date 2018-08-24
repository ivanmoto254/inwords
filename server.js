const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const http = require('http')
const port = process.env.PORT || 3000
const host = '0.0.0.0'
const server = http.createServer(app)
const bodyParser = require('body-parser')
const cors = require('cors')
// TODO: history vue router mode doesnt work...
// const history = require('connect-history-api-fallback')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const devMiddleware = require('webpack-dev-middleware')
const compiler = webpack(webpackConfig)

// app.use(history())
app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  logLevel: 'silent'
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.json({all: 'ok'})
})

server.listen(port, host, () => {
  console.log(`Server started at port ${3000}`)
})
