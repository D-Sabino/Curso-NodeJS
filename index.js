/* //Executando arquivo .html/iniciando servidor
const http = require('http');
const fs = require('fs');

const hotsname = "127.0.0.1"
const port = 3000;

//Cria novo arquivo
fs.writeFile('danki.txt', 'teste danki code', function(err){
    if(err) throw err;
    console.log('O arquivo foi criado com sucesso!');
})

const server = http.createServer((req, res)=>{
    if (req.url == '/danki'){
        //Cria novo arquivo ou insere mais conteudo no arquivo ja existente.
        fs.appendFile('danki.txt', "\nArquivo atualizado", (err)=>{
            if(err) throw err;
            console.log('Arquivo salvo com sucesso!');
        })


        fs.readFile('index.html', function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    }
    
    else{
        return res.end();
    }
    
})

server.listen(port,hotsname,()=>{
    console.log("O servidor esta rodando!");
})
*/

/*
//Fazendo a leitura de um arquivo .txt
const fs = require('fs');
const read = require('readline');

fs.readFile('danki.txt', function(err, data){
    //console.log(data.toString()); //Exibe o conteudo do arquivo no cmd
    let str = data.toString();
    //let newStr = str.split('/'); //Organizou o arquivo como um array, o arquivo constava nomes separados por '/'
    //let newStr = str.substr(1,3); //Informa a partir de qual coluna vai retornar e quantos caracteres vai mostrar
    
    console.log(newStr);

})



const fs = require('fs');
const read = require('readline');

//Função para deletar arquivos
fs.unlink('danki.txt', function(err){
    console.log('O arquivo foi deletado.');

})

//Função para renomear arquivos
fs.rename('danki.txt', 'dankiCode.txt', function (err) { 
    console.log('Arquivo renomeado');
 })
 

 //Lendo informacoes do CMD
 const readline = require('readline');

 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 })

 rl.question('Qual o seu nome? ', function(name){
    console.log('O nome do usuario e: '+name);
    rl.question('Qual a sua idade? ', function(idade){
        console.log('A idade e: '+idade);
    })
 })

 rl.on('close',function(){
    console.log('Adeus!');
    process.exit(0);
 })

 */

 const dankiCode = require ('./dankicode.js');
 dankiCode.helloDankiCode();