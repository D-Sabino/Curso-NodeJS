const puppeteer = require('puppeteer');

class Comentarios{
    constructor(){ this.amount = 0; }
}

(async () => {
    const comentarios = new Comentarios();
    const browser = await puppeteer.launch({headless:true,args: [
    '--window-size=1280,800',
]});

const page = await browser.newPage();
page.setViewport({width:1280,height:800});
await page.goto('https://www.youtube.com/watch?v=J2Q4Nfs04yA');
await page.waitForSelector('h1.title');

console.log('carregou o titulo');

await page.evaluate(_ => {
    window.scrollBy(0, 2000);

});


await page.waitFor(1000);
await page.waitForSelector('h2#count > .count-text > span:nth-child(1)');

console.log('Seletor carregou dos comentários...');

comentarios.amount = await page.evaluate(function(){
    return document.querySelector('h2#count > .count-text > span:nth-child(1)').innerText;
});


if(comentarios.amount != null){
    console.log('Um total de '+ comentarios.amount + ' comentários...');
    console.log('Vamos começar o auto scroll..');
    await page.waitFor(1000);
    await autoScroll(page);
    const comments = [];
    comentarios.amount = await page.evaluate(function(){

    return document.querySelectorAll('.style-scope > #comment > #body > #main > #expander #content-text').length;

});

console.log('O número real de comentários...'+ comentarios.amount);

for (let i = 1; i <= comentarios.amount; i++) {
    const authorSelector = `.style-scope:nth-child(${i}) > #comment > #body > #main > #header > #header-author #author-text > .style-scope`;
    const commentSelector = `.style-scope:nth-child(${i}) > #comment > #body > #main > #expander #content-text`;
    
    await page.waitForSelector(commentSelector);
    await page.waitForSelector(authorSelector);

    const commentText = await getElText(page, commentSelector);
    const author = await getElText(page, authorSelector);

    if(comments.indexOf(author) != -1){ continue; }

    if(commentText.match(/\#eusoudanki/i)){
        console.log(author+': '+commentText);
        comments.push(author);
    }
}

console.log('A pessoa sorteada foi: '+ comments[getRandomInt(0,comments.length-1)]);

}
  await browser.close();

})();



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async function autoScroll(page){

    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var currentDistance = document.querySelector('h2#count > .count-text > span:nth-child(1)').innerText * 100;
            var totalHeight = 0;
            var distance = 500;

            var timer = setInterval(() => {
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= currentDistance){
                    clearInterval(timer);
                    resolve();

                }

            }, 1000);
        });
    });
  }

  async function getCommentsTotal(page,selector){
    return await page.evaluate((selector) => {
          return document.querySelectorAll(selector).length;
      }, selector);

  }

  async function getElText(page, selector) {
      return await page.evaluate((selector) => {
          return document.querySelector(selector).innerText
      }, selector);

  }