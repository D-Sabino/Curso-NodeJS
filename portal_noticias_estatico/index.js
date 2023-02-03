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

app.get('/',(req,res)=>{
    console.log(req.query);

    if(req.query.busca == null){
        res.send('Home');
    }else{
        res.send('Você buscou: '+req.query.busca);
    }

})

app.get(':slug',(req,res)=>{
    res.send(req.params.slug);
})



app.listen(5000,()=>{
    console.log('Server rodando!');
})