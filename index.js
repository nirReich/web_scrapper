const express = require("express");
const app = express();
const webdriver = require("selenium-webdriver");
const builderRun = require("./builder");
const siteUrl="http://neurosymptomsnew.kk5.org/"

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
  try {
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

    const editInLineStyle = async (element) => {
      try {
        const styles = []
        const innerElementsList = await element.findElements(By.xpath(".//*"));
        for (let index = 0; index < innerElementsList.length; index++) {
          const styleObj= `color: ${await innerElementsList[index].getCssValue("color")}; font-size: ${await innerElementsList[index].getCssValue("font-size")}; font-family: ${await innerElementsList[index].getCssValue("font-family")}; font-weight: ${await innerElementsList[index].getCssValue('font-weight')}; font-style: ${await innerElementsList[index].getCssValue('font-style')}; text-align: ${await innerElementsList[index].getCssValue('text-align')}; line-height: ${await innerElementsList[index].getCssValue('line-height')}; text-decoration-line: ${await innerElementsList[index].getCssValue('text-decoration-line')};`
          const elementStyle = {
            type: await innerElementsList[index].getTagName(),
            style: styleObj,
            exe:await innerElementsList[index].getCssValue("color")
          }
          styles.push(elementStyle)

        }

        return styles

      } catch (error) {
        console.log("editInLineStyle func error: " + error);
      }
    }

    //get all inner html in text elements
    const editInnerHtml = async (htmlStr, element) => {
      try {
        const inlineStyles = await editInLineStyle(element)

        let newHtmlStr = htmlStr
          .replace(/\n|\t|\r|\s|(?<=class=).*?(?=\">)/g, "")
          .replace(/class=\"/g, "")
          .replace(/span/g, "span ");

        for (let i = 0; i < inlineStyles.length; i++) {
          if (inlineStyles[i].type ==="span") {
            newHtmlStr = newHtmlStr.replace(`<${inlineStyles[i].type} >`, `<${inlineStyles[i].type} "style=${inlineStyles[i].style}">`)
          }else{

            newHtmlStr = newHtmlStr.replace(`<${inlineStyles[i].type}>`, `<${inlineStyles[i].type} "style=${inlineStyles[i].style}>"`)
          }
        }
        newHtmlStr = newHtmlStr.replace(/h1/g, "p ").replace(/\"/g,'"')

        return `<p>${newHtmlStr}</p>`;

      } catch (error) {
        console.log("editInnerHtml func error: " + error);
      }

    
    };

    // handeling the element list
    async function elementsPush(list) {
      try {
        for (let index = 0; index < list.length; index++) {
          let eleData = "";
          let eleStyle = "";
          const elementRect = await list[index].getRect();
          const eleType = getType(await list[index].getAttribute("class"));
          const elementZ = await list[index].getCssValue("z-index");
          const innerHtml = await list[index].getAttribute("innerHTML");

          const eleRgba = await list[index].getCssValue("background-color");

          if (eleType === "title" || eleType === "body") {
            eleData = { text: await editInnerHtml(innerHtml, list[index]) };
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
        }

      } catch (error) {
        console.log('elementsPush error: ' + error);
      }
    }

    await elementsPush(titleList);
    await elementsPush(bodyList);
    await elementsPush(imgList);
    await elementsPush(btnList);

    return siteObj;
  } catch (error) {
    console.log("run auto func error: " + error);
  }

};

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const response = await runAuto(req.body.url);
    res.send(response);

  } catch (error) {
    console.log("post request error: " + error);
  }
});

app.post("/wix", async (req,res)=>{
  try {
    const response = await builderRun(req.body.url);
    res.send(response);
    
  } catch (error) {
    console.log("post request error: " + error);
  }
})

app.listen("8080", () => {
  console.log("server running on port 8080");
});


