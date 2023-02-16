const express = require('express');
const mongoose = require('mongoose')
var bodyParser = require('body-parser')

const path = require('path');
const app = express();

const Posts = require('./Posts.js');

mongoose.connect('mongodb+srv://root:HthZ6jKqn5x1SmSC@cluster0.sotslrg.mongodb.net/dankicode?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}).then(function(){
    console.log('Conectado com sucesso');
}).catch(function(err){
    console.log(err.message);
})

app.use( bodyParser.json() );       // to support JSON-encoded bodies 
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));


app.get('/',(req,res)=>{
    
    if(req.query.busca == null){
        Posts.find({}).sort({'_id': -1}).exec(function(err,posts){
            posts = posts.map(function(val){
                return{
                    titulo: val.titulo,
                    conteudo: val.conteudo,
                    descricaoCurta: val.conteudo.substr(0,100),
                    imagem: val.imagem,
                    slug: val.slug,
                    categoria: val.categoria
                }
            });

            res.render('home',{posts:posts});
        })
    }else{
        res.render('busca',{});
    }

  
});


app.get('/:slug',(req,res)=>{
    //res.send(req.params.slug);
    res.render('single',{});
})



app.listen(5000,()=>{
    console.log('server rodando!');
})