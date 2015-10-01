var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var server = require('http').Server(app)
var io = require('socket.io')(server)

app.use(express.static(__dirname + '/public'))

io.on('connection', function(socket){
  console.log('A user connected')

  socket.on('disconnect', function(){
    console.log('A user disconnected')
  })

  socket.on('channel', function(msg){
    io.emit('channel', msg)
  })
})

server.listen(port, function(){
  console.log('Server started on port %s', port)
})