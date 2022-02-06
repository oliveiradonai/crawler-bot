const puppeteer = require('puppeteer');
const fs = require('fs');
const http = require('http');
const optionsGab = {
  hostname: 'localhost',
  port: 3000,
  path: '/gabinete',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}
const optionsPlc = {
  hostname: 'localhost',
  port: 3000,
  path: '/placa',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}
const optionsVol = {
  hostname: 'localhost',
  port: 3000,
  path: '/volante',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}
const vlrGabMin = 29990;
const vlrPlcMin = 430000;
const vlrVolMin = 149790;

async function robo(){
  const data = new Date();
  const dia  = formataData(data.getDate());
  const mes  = formataData(data.getMonth()+1);
  const ano  = data.getFullYear();
  const hora = formataData(data.getHours());
  const min  = formataData(data.getMinutes());
  const seg  = formataData(data.getSeconds());
  function formataData(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
  }
  const dataConsulta2 = `${dia}/${(mes)}/${ano} - ${hora}:${min}:${seg}`;
  const dataConsulta1 = `${dia}/${(mes)}/${ano} - ${hora}:${min}:${seg}`;
  const dataConsulta3 = `${dia}/${(mes)}/${ano} - ${hora}:${min}:${seg}`;
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
//gabinete
  try{
    const url1 = 'https://www.kabum.com.br/produto/134770/'
    await page.goto(url1);
    valor1 = await page.evaluate(() => {
      return document.getElementById("blocoValores").getElementsByTagName("h4")[0].innerText;
    });

    const data = JSON.stringify({
      preco: valor1,
      data: dataConsulta1,
      status: 1
    })

    const reqGab = http.request(optionsGab, res => {
      console.log(`statusCode: ${res.statusCode}`)
    
      res.on('data', d => {
        process.stdout.write(d)
      })
    })
    
    reqGab.on('error', error => {
      console.error(error)
    })
    
    reqGab.write(data)
    reqGab.end()

    valor1Con = valor1.replace("R$", "").replace(/[^0-9]/g, "");
    parseFloat(valor1Con);
  
    if (valor1Con < vlrGabMin){
      const browserCheck = await puppeteer.launch({headless: false});
      const pageCheck = await browserCheck.newPage();
      const urlCheck = 'https://www.kabum.com.br/produto/134770/'
      await pageCheck.goto(urlCheck);
    }
    else {
      console.log("Caro!")
    }
  }
  catch(e){
    const data = JSON.stringify({
      preco: "Indisponível",
      data: dataConsulta1,
      status: 0
    })

    const reqGab = http.request(optionsGab, res => {
      console.log(`statusCode: ${res.statusCode}`)
    
      res.on('data', d => {
        process.stdout.write(d)
      })
    })
    
    reqGab.on('error', error => {
      console.error(error)
    })
    
    reqGab.write(data)
    reqGab.end()
  }

//placa de video
  try{
    const url2 = 'https://www.kabum.com.br/produto/167208/'
    await page.goto(url2);
      const valor2 = await page.evaluate(() => {
        return document.getElementById("blocoValores").getElementsByTagName("h4")[0].innerText;
      });

    const data2 = JSON.stringify({
      preco: valor2,
      data: dataConsulta2,
      status: 1
    })

    const reqPlc = http.request(optionsPlc, res => {
      console.log(`statusCode: ${res.statusCode}`)
    
      res.on('data', d => {
        process.stdout.write(d)
      })
    })
    
    reqPlc.on('error', error => {
      console.error(error)
    })
    
    reqPlc.write(data2)
    reqPlc.end()

    valor2Con = valor2.replace("R$", "").replace(/[^0-9]/g, "");
    parseFloat(valor2Con);
  
    if (valor2Con < vlrPlcMin){
      const browserCheck2 = await puppeteer.launch({headless: false});
      const pageCheck2 = await browserCheck2.newPage();
      const urlCheck2 = 'https://www.kabum.com.br/produto/167208/'
      await pageCheck2.goto(urlCheck2);
    }
    else {
      console.log("Caro!")
    }

  }
  catch (e){
    const data2 = JSON.stringify({
      preco: "Indisponível",
      data: dataConsulta2,
      status: 0
    })

    const reqPlc = http.request(optionsPlc, res => {
      console.log(`statusCode: ${res.statusCode}`)
    
      res.on('data', d => {
        process.stdout.write(d)
      })
    })
    
    reqPlc.on('error', error => {
      console.error(error)
    })
    
    reqPlc.write(data2)
    reqPlc.end()
  }

//volante
try{
  const url3 = 'https://www.kabum.com.br/produto/69305/'
  await page.goto(url3);
  valor3 = await page.evaluate(() => {
    return document.getElementById("blocoValores").getElementsByTagName("h4")[0].innerText;
  });

  const data3 = JSON.stringify({
    preco: valor3,
    data: dataConsulta3,
    status: 1
  })

  const reqVol = http.request(optionsVol, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
      process.stdout.write(d)
    })
  })
  
  reqVol.on('error', error => {
    console.error(error)
  })
  
  reqVol.write(data3)
  reqVol.end()

  valor3Con = valor3.replace("R$", "").replace(/[^0-9]/g, "");
  parseFloat(valor3Con);

  if (valor3Con < vlrVolMin){
    const browserCheck3 = await puppeteer.launch({headless: false});
    const pageCheck3 = await browserCheck3.newPage();
    const urlCheck3 = 'https://www.kabum.com.br/produto/69305/'
    await pageCheck3.goto(urlCheck3);
  }
  else {
    console.log("Caro!")
  }
}
catch(e){
  const data3 = JSON.stringify({
    preco: "Indisponível",
    data: dataConsulta3,
    status: 0
  })

  const reqVol = http.request(optionsVol, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
      process.stdout.write(d)
    })
  })
  
  reqVol.on('error', error => {
    console.error(error)
  })
  
  reqVol.write(data3)
  reqVol.end()
}
  await browser.close();
};
robo();