const puppeteer = require('puppeteer');

const scrap_Domestika=async (query) => {
    if(!query){
        query= "freelance full stack"
    }
    const browser = await puppeteer.launch({headless: true});

    const page = await browser.newPage();

    await page.goto('https://www.domestika.org/es/jobs');

    await page.setViewport({width:1440, height:614});

    await page.type('#query', 'freelance '+query)

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
    const urls = enlaces.slice(0, 5);
    const ofertas = [];
    for(let enlace of urls){
        await page.goto(enlace);
        await page.waitForSelector('h1');

        const oferta = await page.evaluate(()=>{
            const tmp = {};
            tmp.title = document.querySelector('h1').innerText;
            tmp.company = document.querySelector('h2').innerText;
            tmp.salary = document.querySelector('dd:nth-of-type(4n)').innerText;
            tmp.url = window.location.href;
            return tmp
        });
        ofertas.push(oferta);
    }
    console.log("ofertas Domestika sacadas")
    await browser.close();
    return ofertas
};

module.exports=scrap_Domestika