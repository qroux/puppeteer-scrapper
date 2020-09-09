const puppeteer = require("puppeteer");

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

const getScreenshot = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto("https://dr-roux-gilbert.chirurgiens-dentistes.fr/");
  await delay(2000);
  await page.screenshot({ path: "full-screenshot.png" });
  await page.setViewport({ width: 375, height: 812 });
  await delay(2000);
  await page.screenshot({ path: "mobile-screenshot.png" });
  await browser.close();
};

getScreenshot();
