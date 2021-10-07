const express = require("express");
const app = express();
const webdriver = require("selenium-webdriver");

// const url=" http://neurosymptomsnew.kk5.org/";

const siteObj = { components: [] };

const pushElementdata = (element, type, att, z_index, style = "none") => {
  compObj = {
    type,
    x: element.x,
    y: element.y,
    width: element.width,
    height: element.height,
    z_index,
    style,
  };
  siteObj.components.push({ ...compObj, ...att });
};

const getType = (className) => {
  if (className.includes("title")) {
    return "title";
  } else if (className.includes("body")) {
    return "body";
  } else if (className.includes("Button")) {
    return "button";
  } else {
    return "img";
  }
};

//----------------------
const runAuto = async (url) => {
  let driver = await new webdriver.Builder().forBrowser("chrome").build();
  let By = webdriver.By;
  await driver.get(url);

  //get all the title elements:
  const titleList = await driver.findElements(By.css('div[class$=" title"]'));
  console.log("title elements found: " + titleList.length);

  //get all the body elements:
  const bodyList = await driver.findElements(By.css('div[class$=" body"]'));
  console.log("body elements found: " + bodyList.length);

  //get all the img elements:
  const imgList = await driver.findElements(By.css("img"));
  console.log("img elements found: " + imgList.length);

  //get all Buttons elements:
  const btnList = await driver.findElements(By.css('a[class^="linkButton"]'));
  console.log("button elements found: " + btnList.length);

  //get all inner html in text elements =============== keep on working!!!
  const editInnerHtml = async (htmlList) => {
    try {
      const list = [];
      for (let i = 0; i < htmlList.length; i++) {
        const tagName=await htmlList[i].getTagName()
        const text = await htmlList[i].getText();
        list.push(`<${tagName}>${text}</${tagName}>`);
      }
      return list;
    } catch (error) {
      console.log("error in editInnerHtml function: " + error);
    }

    // const classStr = "";

    // const newHtmlStr = htmlStr
    //   .replace(/\n|\t|\r|\s/g, "")
    //   .replace(/h1/g, "p ")
    //   .replace(/span/g, "span ");
  };

  // handeling the element list
  async function elementsPush(list) {
    for (let index = 0; index < list.length; index++) {
      let eleData = "";
      let eleStyle = "";
      const elementRect = await list[index].getRect();
      const eleType = getType(await list[index].getAttribute("class"));
      const elementZ = await list[index].getCssValue("z-index");
      const innerHtmlList = await list[index].findElements(By.xpath(".//*"));
      const eleRgba = await list[index].getCssValue("background-color");

      if (eleType === "title" || eleType === "body") {
        eleData = { text:await editInnerHtml( innerHtmlList) }; //enter here the html elements list string
      } else if (eleType === "button") {
        eleData = { href: await list[index].getAttribute("href") };
        eleStyle = {
          backgroundOpacity: eleRgba.slice(
            eleRgba.length - 5,
            eleRgba.length - 1
          ),
          backgroundColor: eleRgba,
          backgroundImage: await list[index].getCssValue("background-image"),
          borderColor: await list[index].getCssValue("background-color"),
          borderWidth: await list[index].getCssValue("border-width"),
          borderRadius: await list[index].getCssValue("border-radius"),
          borderStyle: await list[index].getCssValue("border-style"),
          shadow: await list[index].getCssValue("box-shadow"),
        };
      } else {
        eleData = { src: await list[index].getAttribute("src") };
      }

      pushElementdata(elementRect, eleType, eleData, elementZ, eleStyle);
      editInnerHtml(innerHtmlList);
    }
  }

  await elementsPush(titleList);
  await elementsPush(bodyList);
  await elementsPush(imgList);
  await elementsPush(btnList);

  return siteObj;
};

app.use(express.json());

app.post("/", async (req, res) => {
  const response = await runAuto(req.body.url);
  res.send(response);
});

app.listen("8080", () => {
  console.log("server running on port 8080");
});
