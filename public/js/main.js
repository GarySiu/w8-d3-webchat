$(document).ready(function(){
  console.log('Dom loaded')
  $('#send').on('click', function(){
    event.preventDefault()
    console.log('clicked!')
  })




  var socket = io()

  socket.on('connect', function(socket){
    console.log('Connected')
  })

  socket.on('disconnect', function(){
    console.log('Disconnected')
  })
})