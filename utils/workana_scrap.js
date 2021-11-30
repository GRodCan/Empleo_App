const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: true});

    const page = await browser.newPage();
///////////////////ABRO LA WEB///////////////////////////////////
    await page.goto('https://www.workana.com/jobs?language=es&query=full+stack&region=154%2C039%2C155%2C151');
////////////////LO PONGO TAMAÑO PANTALLA////////////////////////////////////////////
    await page.setViewport({width:1440, height:614});
///////////////////////ELIJO EL CUADRO DE TEXTO Y ESCRIBO FULL STACK///////////////////////////////////////
    await page.type('#Query', 'full stack')
////////////////CLICKO EL BOTÖN DE BÜSQUEDA Y ESPERO AL ELEMENTO QUE QUIERO/////////////////////////////////
    await page.click('.search');
    await page.waitForSelector('.project-item');
////////////////////////RECOJO LOS ENLACES Y LOS METO EN UN ARRAY///////////////////////////////
    const enlaces = await page.evaluate( () => {
        const elements = document.querySelectorAll('.project-item .project-header h2 a')
        
        const links = [];
        for(let element of elements) {
            links.push(element.href);
        }
        return links;
    });

    console.log("Esto son enlaces", enlaces.length)
/////////////////////////ME VOY METIENDO EN LOS ENLACES DEL ARRAY Y EXTRAIGO LA INFO QUE QUIERO
    const ofertas = [];
    for(let enlace of enlaces){
        await page.goto(enlace);
        await page.waitForSelector('h1');

        const oferta = await page.evaluate(()=>{
            const tmp = {};
            tmp.title = document.querySelector('h1').innerText;
            tmp.description = document.querySelector('.expander').innerText;
            return tmp
        });
        ofertas.push(oferta);
    }
    console.log(ofertas)
    await browser.close();
})();