import dotenv from "dotenv";
dotenv.config();
import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // go to url and wait for the page to load
  await page.goto("https://mobile.twitter.com/i/flow/login", {
    waitUntil: "networkidle0",
  });

  // wait fot username input, click on username input and type in username
  await page.waitForSelector("input[name=username]");
  await page.click("input[name=username]");
  await page.type("input[name=username]", process.env.EMAIL);

  // get the next button by classaname and click it
  const btn = await page.$(".r-18jsvk2");
  await btn.evaluate((form) => form.click());

  // wait for username(text) input to load, click on username (text) input and type in username (text)
  await page.waitForSelector("input[name=text]");
  await page.click("input[name=text]");
  await page.type("input[name=text]", `${process.env.NAM}`);

  //wait for the next button and click it 
  await page.waitForSelector(".r-18jsvk2");
  const btn1 = await page.$(".r-18jsvk2");
  await btn1.evaluate((form) => form.click());

  // wait for password input, click on password input and type in the password
  await page.waitForSelector("input[name=password]");
  await page.click("input[name=password]");
  await page.type("input[name=password]", process.env.PASSWORD);

  //wait for login button and login
  await page.waitForSelector(".r-18jsvk2");
  const btn2 = await page.$(".r-18jsvk2");
  await btn2.evaluate((form) => form.click());

  // wait for the page after login in
  await page.waitForNavigation();

  //take screenshoot
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
