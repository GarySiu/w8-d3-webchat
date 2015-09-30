var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var bodyParser = require('body-parser')
var server = require('http').Server(app)
var io = require('socket.io')(server)


app.use(express.static(__dirname + '/public'))

app.get('/', function(req,res){
  res.send('Hello World!')
})

io.on('connection', function(socket){
  console.log('A user connected')

  socket.on('disconnect', function(){
    console.log('A user disconnected')
  })
})

server.listen(port, function(){
  console.log('Server started on port %s', port)
})