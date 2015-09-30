$(document).ready(function(){
  console.log('Dom loaded')

  var socket = io()

  socket.on('connect', function(socket){
    console.log('Connected')
  })

  socket.on('disconnect', function(){
    console.log('Disconnected')
  })

  socket.on('channel', function(msg){
    $('#messages').append('<li>' + msg + '</li>')
  })

  $('#send').on('click', function(){
    event.preventDefault()
    // console.log('clicked!')
    socket.emit('channel', $('#chatbox').val())
    $('#chatbox').val('')
  })

})