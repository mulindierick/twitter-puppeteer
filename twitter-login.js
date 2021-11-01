import dotenv from "dotenv";
dotenv.config();
import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://mobile.twitter.com/i/flow/login", {
    waitUntil: "networkidle0",
  });

  // wait for username input. type in username. click next btn
  await page.waitForSelector("input[name=username]");
  await page.type("input[name=username]", process.env.EMAIL);
  await page.$eval(".r-18jsvk2", (btn) => btn.click());

  // wait for username(text) input. type in username (text). click next btn
  await page.waitForSelector("input[name=text]");
  await page.type("input[name=text]", `${process.env.NAM}`);
  await page.$eval(".r-18jsvk2", (btn) => btn.click());

  // wait for password input. type in the password. login
  await page.waitForSelector("input[name=password]");
  await page.type("input[name=password]", process.env.PASSWORD);
  await page.$eval(".r-18jsvk2", (btn) => btn.click());

  // wait for the page after login in
  await page.waitForNavigation();

  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
