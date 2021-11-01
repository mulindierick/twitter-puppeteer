import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // go to url and wait for the page to load
  await page.goto("https://mobile.twitter.com/i/flow/login", {
    waitUntil: "networkidle0",
  });

  // click on username input and type in username
  await page.click("input[name=username]");
  await page.type("input[name=username]", "mulindierick@gmail.com");

  // get the next button by classaname and click next
  const btn = await page.$(".r-18jsvk2");
  await btn.evaluate((form) => form.click());

  // click on username (text) input and type in username (text)
  await page.waitForSelector("input[name=text]");
  await page.click("input[name=text]");
  await page.type("input[name=text]", "mulindierick");

  await page.waitForSelector(".r-18jsvk2");
  const btn1 = await page.$(".r-18jsvk2");
  await btn1.evaluate((form) => form.click());

  // get the next button by classaname and click next
  // const btn = await page.$(".r-18jsvk2");

  // click on password input and type in the password
  await page.waitForSelector("input[name=password]");
  await page.click("input[name=password]");
  await page.type("input[name=password]", "mulindI12");

  await page.waitForSelector(".r-18jsvk2");
  const btn2 = await page.$(".r-18jsvk2");
  await btn2.evaluate((form) => form.click());

  await page.waitForNavigation()

  // get the login button by classaname and login
  // const btn = await page.$(".r-18jsvk2");
  // await btn.evaluate((form) => form.click());

  //take screenshoot
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();

// get the button by id and click on it

// document.getElementById("gsi_294462_929240").style.backgroundColor = "red"

// get the right gmail account

// document.getElementsByClassName("fFW7wc-ibnC6b")[0].style.backgroundColor = "red"

// https://mobile.twitter.com/i/flow/login
