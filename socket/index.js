const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

var usuarios = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');

});



io.on('connection',(socket)=>{

    socket.on('chat message', (obj)=>{
        io.emit('chat message', obj);
    })

})



http.listen(3000, () => {
  console.log('listening on *:3000');

});