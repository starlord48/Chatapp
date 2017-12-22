var express = require('express');
var socket =  require('socket.io');
//app setup
var app = express();
var server = app.listen(3000,function(){
    console.log('listening to request on port 3000...');
    
});
//set up middleware
//static code...we put our frontend in our public folder
app.use(express.static('public'));
//socket setup and pass server
var io=socket(server);
    //listening out for connection
    io.on('connection' , (socket) => {
        console.log('made socket connection',socket.id);
        //handle chat event
        socket.on('chat',function(data){
            //console.log(data)
            io.sockets.emit('chat',data);
        });
       
    });

