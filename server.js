'use strict'
require('dotenv').config()
if (process.env.NODE_ENV === 'development') {
  console.clear()
}

const http = require('http')
const app = require('./app')
const debug = require('debug')('hylogic:server')
const helpers = require('./nodes/helpers')
debug.enabled = true

const host = '0.0.0.0'
const port = helpers.normalizePort(process.env.PORT || '3000')
app.set('port', port)

const server = http.createServer(app)
const io = require('./sockets')(server)

app.use(function(req, res, next) {
  req.io = io
  next()
})

server.listen(port, host)
server.on('error', onError)
server.on('listening', onListening)

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }
  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1);
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1);
      break
    default:
      throw error
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Server is listening on port: ' + bind)
}
