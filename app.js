const express = require('express')
  path = require('path')
  favicon = require('serve-favicon')
  logger = require('morgan')
  bodyParser = require('body-parser')
  cors = require('cors')
  app = express()
  debug = require('debug')('hylogic:app')
  helpers = require('./nodes/helpers')
  // history = require('connect-history-api-fallback')
debug.enabled = true

// MIDDLEWARE
// app.use(history())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

// ROUTES
app.use('/', (req, res, next) => {
  // res.json({ok: 'go'})
  console.log(req.io)
  next()
})

// RENDER
if (process.env.NODE_ENV === 'development') {
  require('./appwebpack')(app)
}
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')))
  // use after placing your favicon in /public
  // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
}

// HANDLE ERRORS
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
