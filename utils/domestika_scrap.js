const puppeteer = require('puppeteer');

const scrap_Domestika=async (query) => {
    if(!query){
        query= "freelance full stack"
    }
    console.log(query);
    const browser = await puppeteer.launch({headless: true});

    const page = await browser.newPage();

    await page.goto('https://www.domestika.org/es/jobs');

    await page.setViewport({width:1440, height:614});

    await page.type('#query', query)

    await page.click('.ais-SearchBox-submit');
    await page.waitForSelector('.job-item');

    const enlaces = await page.evaluate( () => {
        const elements = document.querySelectorAll('.job-item .row .col-md-6 h2 a')
        
        const links = [];
        for(let element of elements) {
            links.push(element.href);
        }
        return links;
    });

    console.log("Esto son enlaces", enlaces.length)

    const ofertas = [];
    for(let enlace of enlaces){
        await page.goto(enlace);
        await page.waitForSelector('h1');

        const oferta = await page.evaluate(()=>{
            const tmp = {};
            tmp.title = document.querySelector('h1').innerText;
            tmp.company = document.querySelector('h2').innerText;
            tmp.salary = document.querySelector('dd:nth-of-type(4n)').innerText
            return tmp
        });
        ofertas.push(oferta);
    }
    await browser.close();
    return ofertas
};

module.exports=scrap_Domestika