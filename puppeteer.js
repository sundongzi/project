const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ timeout: 0 });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.setViewport({ width: 1000, height: 800 })
  await page.screenshot({ path: 'google.png' });
  // page.evaluate(() => console.log('hello', 5, {foo: 'bar'}))
  await browser.close();
})();
