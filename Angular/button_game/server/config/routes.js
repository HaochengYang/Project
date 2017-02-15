module.exports = function Route(app,server){
  var io = require('socket.io').listen(server);
  var count =0;
  io.sockets.on('connection',function(socket){

    socket.on('show_count', function(data){
         count += 1;
    io.emit('update_message',{res:count});
  });

  socket.on("reset_counter", function (data){
    count = 0;
    io.emit('reset_response', {res:count});
       });
  });

   app.get('/', function(req,res){
     res.render('index');
   });

};
