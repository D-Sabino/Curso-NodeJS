const express = require('express');
var bodyParser = require('body-parser')

const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

var tarefas = ['TESTE 01', 'TESTE 02', 'TESTE 03'];

app.post('/',(req,res)=>{
    tarefas.push(req.body.tarefa);
    res.render('index',{tarefaslist:tarefas});
})

app.get('/',(req,res)=>{
    //res.render('index', {nome: 'Daniel'});
    /*
        Chamada do nome no HTML:
        <html>
            <body>
                <h2>Ola <%= nome %>!</h2>
            </body>
        </html>
    */
    res.render('index', {tarefaslist:tarefas})
});

app.get('/deletar/:id', (req, res)=>{
    console.log(req.params.id);
    tarefas = tarefas.filter(function(val,index){
        if (index!= req.params.id){
            return val;
        }
    })
    res.render('index', {tarefaslist:tarefas})
})

app.listen(5000,()=>{
    console.log('Server rodando!');
})