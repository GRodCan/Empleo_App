const puppeteer = require('puppeteer');

const scrap_Glassdoor=async (query) => {
    console.log("Empieza scrap Glassdoor");
    if(!query){
        query= "full-stack"
    }
    const browser = await puppeteer.launch({headless: true});

    const page = await browser.newPage();

    await page.goto('https://www.glassdoor.com/Job/index.htm');

    await page.setViewport({width:1440, height:614});

    await page.type('#KeywordSearch', 'freelance '+query)

    await page.click('#HeroSearchButton');
    await page.waitForSelector('.react-job-listing');

    const enlaces = await page.evaluate( () => {
        const elements = document.querySelectorAll('li .pl-sm a')
        
        const links = [];
        for(let element of elements) {
            links.push(element.href);
        }
        return links;
    });
///////////////////////ELIMINO LOS DUPLICADOS
    const urls = await enlaces.filter((link,index) =>{ return enlaces.indexOf(link) === index})
    console.log("Esto son enlaces", urls.length)
////////////////COJO SOLO LOS 10 PRIMEROS
    const urls2 = urls.slice(0, 5);
    console.log("Esto es recortado", urls2.length)
    const ofertas = [];
    for(let enlace of urls2){

        await page.goto(enlace);
        await page.waitForSelector('.css-17x2pwl');

        const oferta = await page.evaluate(()=>{
            const tmp = {};
            tmp.title = document.querySelector('.css-17x2pwl').innerText;
            tmp.company = document.querySelector('.e11nt52q1').innerText;
            tmp.url = window.location.href;
            return tmp;
        },);
        ofertas.push(oferta);
    }
    console.log("Scrap Glassdoor conseguido!")
    await browser.close();
    return ofertas
};

module.exports =scrap_Glassdoor