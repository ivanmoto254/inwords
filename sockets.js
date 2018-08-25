const socketIO = require('socket.io')
const debug = require('debug')('hylogic:sockets')
debug.enabled = true
module.exports = (server) => {
  const io = socketIO(server)
  io.on('connection', function(socket) {
    debug('new socket connection')
  })
  return io
}