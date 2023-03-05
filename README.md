# Curso de NodeJS da Danki.Code

## Descrição do projeto
<p align="justify">
  Desenvolvimento das aulas do curso de NodeJS. <br>
  Curso da Danki.code: https://cursos.dankicode.com/campus/curso-nodejs
</p>

## Instruções
#### Após clonar o repositório realize os seguintes processos:

```bash
npm install
npm install -g nodemon
npm install mongoose
```

<p align="justify">
O nodemon é uma ferramenta muito útil para o desenvolvimento de aplicações em Node.js, pois permite que o desenvolvedor faça modificações no código e veja os resultados automaticamente, sem precisar reiniciar a aplicação a cada alteração. Porém, em alguns sistemas, é possível que ocorra o erro "O arquivo ... nodemon.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema". Isso acontece porque, por questões de segurança, o PowerShell pode bloquear a execução de scripts.

Para solucionar esse problema, é necessário habilitar a execução de scripts no PowerShell. Para isso, basta abrir o PowerShell como administrador e digitar o comando:<br>
```bash
Set-ExecutionPolicy RemoteSigned
```
Isso permite que scripts locais sejam executados no computador, o que é necessário para utilizar o nodemon.

É importante lembrar que habilitar a execução de scripts pode apresentar riscos de segurança, por isso é recomendável que o desenvolvedor tome as medidas de segurança necessárias antes de executar este comando.
</p>


## Módulos:
- [x] Introdução <br>
- [x] Configurando ambiente <br>
- [x] Primeiros passos com NodeJS <br>
- [x] Manipulando arquivos com NodeJS <br>
- [x] Nodemon para produtividade <br>
- [x] Entendendo o que são módulos <br>
- [x] Seu primeiro projeto com NodeJS <br>
- [x] Projeto site noticias estatico <br>
- [x] Projeto site noticias dinamico <br>
- [x] Criando sistema de chat (sockets) <br>
- [x] Deploy NodeJS <br>
- [ ] Projeto portal de gestão <br>
- [ ] Webscraping com Puppeteer e criação de bots (BONUS)
