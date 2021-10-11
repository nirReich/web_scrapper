const express = require("express");
const app = express();
const webdriver = require("selenium-webdriver");
const wixUrl =
  "https://editor.wix.com/html/editor/web/renderer/edit/826fa778-7591-4a33-84f0-05305674d8a3?metaSiteId=5abe1601-eeff-4e6b-879f-a1446587e95e&editorSessionId=81ec490e-1d4d-4e05-8b47-f9f682e05070&_gl=1*fgisft*_ga*MTc1MTkxNDQ5OC4xNjMzODY0NDgx*_ga_H314XQHSPY*MTYzMzg2NDgwOS4xLjEuMTYzMzg2NDgxNC41NQ..";
const logInEmail = "nir.reich@devalore.com";
const logInPass = "Nir@Devalore";

const builderRun = async (url) => {
  let driver = await new webdriver.Builder().forBrowser("chrome").build();
  let By = webdriver.By;
  let until = webdriver.until;
  await driver.get(url);
  await driver.manage().window().maximize();

  const connectToWix = async () => {
    try {
      await driver
        .findElement(By.css("input[default-email]"))
        .sendKeys(logInEmail);
      await driver
        .findElement(By.css('input[name="password"]'))
        .sendKeys(logInPass);
      await driver.findElement(By.css('button[name="submit"]')).click();
    } catch (error) {
      console.log("connectToWix func error: " + error);
    }
  };

  // connect to wix and await until ceptcha is ok
  await connectToWix();
  await driver
    .wait(
      until.elementLocated(
        By.css(
          'button[data-automation-id="leftBarButton-addPanelInfra.newAddPanel"]'
        )
      ),
      30000
    )
    .click();
  setTimeout(async () => {
    await driver
      .findElement(By.css('div[data-aid="menu-bar-item-site"]'))
      .click();
  }, 10000);

  return "app runing!";
};

module.exports = builderRun;
