const fs = require('fs');
const puppeteer = require('puppeteer');
fs.mkdirSync('es6-pdf')
let text = async () => {
  const brower = await puppeteer.launch({ headless: false })
  const page = await brower.newPage()
  await page.goto('http://books.toscrape.com/')
  await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container')
  const result = await page.evaluate(() => {
    let title = page.$('h1').innerText
    let price = page.$('.price_color').innerText
    return {
      title,
      price
    }
  });
  brower.close();
  return result
};
text().then((value) => {
  console.log('value', value)
});
