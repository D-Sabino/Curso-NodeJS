const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

var usuarios = [];
var socketIds = [];


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');

});



io.on('connection',(socket)=>{
    socket.on('new user',function(data){
        if(usuarios.indexOf(data) != -1){
            socket.emit('new user',{success: false});

        }else{
            usuarios.push(data);
            socketIds.push(socket.id);

            socket.emit('new user',{success: true});

            //Emit para os outros usuários dizendo que tem um novo usuário ativo.
            //socket.broadcast.emit("hello", "world");

        }

    })

    

    socket.on('chat message',(obj)=>{

        if(usuarios.indexOf(obj.nome) != -1 && usuarios.indexOf(obj.nome) == socketIds.indexOf(socket.id)){
            io.emit('chat message',obj);

        }else{
            console.log('Erro: Você não tem permissão para executar a ação.');

        }

    })



    socket.on('disconnect', () => {
        let id = socketIds.indexOf(socket.id);
        socketIds.splice(id,1);
        usuarios.splice(id,1);
        console.log(socketIds);
        console.log(usuarios);
        console.log('user disconnected');

    });



})



http.listen(3000, () => {

  console.log('listening on *:3000');

});