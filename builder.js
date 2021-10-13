const express = require("express");
const app = express();
const webdriver = require("selenium-webdriver");
const wixUrl =
  "https://editor.wix.com/html/editor/web/renderer/edit/826fa778-7591-4a33-84f0-05305674d8a3?metaSiteId=5abe1601-eeff-4e6b-879f-a1446587e95e&editorSessionId=81ec490e-1d4d-4e05-8b47-f9f682e05070&_gl=1*fgisft*_ga*MTc1MTkxNDQ5OC4xNjMzODY0NDgx*_ga_H314XQHSPY*MTYzMzg2NDgwOS4xLjEuMTYzMzg2NDgxNC41NQ..";
const logInEmail = "nir.reich@devalore.com";
const logInPass = "Nir@Devalore";
let documentServices = {
  components: {
    add: () => {},
    update: () => {},
  },
};

const elementList = [
  {
    "type": "title",
    "x": 44,
    "y": 16,
    "width": 878,
    "height": 115,
    "z_index": "16",
    "style": "",
    "text": "<p><p  style=\"color: rgba(255, 255, 255, 1); font-size: 20px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 36px; text-decoration-line: none;\" style=\"color: rgba(255, 255, 255, 1); font-size: 32px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 42px; text-decoration-line: none;\" >              <span style=\"color: rgba(255, 255, 255, 1); font-size: 32px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 42px; text-decoration-line: none;\">Functional Neurological Disorder (FND) : a patient's guide</span >          </p >      <p  >              <span style=\"color: rgba(255, 255, 255, 1); font-size: 20px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 36px; text-decoration-line: none;\">including Functional/Dissociative (non-epileptic) Seizures, &nbsp;Functional Movement Disorder and other functional symptoms</span >          </p >      </p>"
},
];

const buildComps = async (json) => {
  try {
    if (json.type === "title" || json.type === "body") {
      //---------------text model----------
      return {
        style: "txtNew",
        data: {
          linkList: [],
          text: json.text,
          stylesMapId: "CK_EDITOR_PARAGRAPH_STYLES",
          type: "StyledText",
          metaData: {
            isPreset: false,
            schemaVersion: "1.0",
            isHidden: false,
          },
        },
        componentType: "wysiwyg.viewer.components.WRichText",
        id: "WRichTextStyleFont1",
        layout: {
          x: json.x,
          fixedPosition: false,
          y: json.y,
          scale: 1,
          height: json.height,
          rotationInDegrees: 0,
          width: json.width,
        },
        type: "Component",
        skin: "wysiwyg.viewer.skins.WRichTextNewSkin",
      };

    } else if (json.type === "img") {
      //---------------img model----------
      return {
        componentType: "wysiwyg.viewer.components.WPhoto",
        layout: {
          width: json.width,
          height: json.hight,
          x: json.x,
          y: json.y,
          rotationInDegrees: 0,
          scale: 1,
          fixedPosition: false,
          anchors: [],
        },
        data: {
          width: json.width,
          height: json.hight,
          alt: json.type,
          name: json.type,
          uri: json.src,
          type: "Image",
          description: "",
        },
        props: {
          type: "WPhotoProperties",
        },
        style: "wp2",
      };
    } else if (json.type === "button") {
      //---------------button model----------
      return {
        componentType: "wixui.StylableButton",
        style: {
          "background": json.style.borderStyle,
          "background-attachment": "",
          "background-clip": "",
          "background-color": json.style.backgroundColor,
          "background-image": json.style.backgroundImage,
          "background-origin": "",
          "background-position": "",
          "background-position-x": "",
          "background-position-y": "",
          "background-repeat": "",
          "background-size": json.style.borderWidth
      },
        layout: {
          width: json.width,
          height: json.hight,
          x: json.x,
          y: json.y,
        },
        type: "Component",
        data: {
          label: "Button",
          svgId: "b861b040274141de9c08999ec3b76edf.svg",
          type: "StylableButton",
          metaData: {
            isPreset: false,
            schemaVersion: "1.0",
            isHidden: false,
          },
        },
        props: {
          type: "StylableButtonProperties",
          metaData: {
            isHidden: false,
            isPreset: true,
            schemaVersion: "1.0",
          },
        },
      };
    }
  } catch (error) {
    console.log("buildComps func error: " + error);
  }
};

const builderRun = async (url) => {
  let driver = await new webdriver.Builder().forBrowser("chrome").build();
  let By = webdriver.By;
  let until = webdriver.until;

  const connectToWix = async () => {
    try {
      const cookies = [
        {
          domain: "editor.wix.com",
          expiry: 1633948547,
          httpOnly: false,
          name: "fedops.logger.defaultOverrides",
          path: "/",
          secure: false,
          value:
            "%7B%22paramsOverridesForApp%22%3A%7B%22wixstores-dashboard-shipping.pages.index%22%3A%7B%22is_rollout%22%3Atrue%7D%7D%7D",
        },
        {
          domain: ".wix.com",
          expiry: 1649716484,
          httpOnly: false,
          name: "__utmz",
          path: "/",
          secure: false,
          value:
            "248670552.1633948484.1.1.utmcsr=users.wix.com|utmccn=(referral)|utmcmd=referral|utmcct=/",
        },
        {
          domain: ".editor.wix.com",
          expiry: 1633950294,
          httpOnly: false,
          name: "bSession",
          path: "/",
          sameSite: "None",
          secure: true,
          value: "7b226aa1-1150-4b7f-9c5b-adf7bbeae965|1",
        },
        {
          domain: ".wix.com",
          httpOnly: false,
          name: "__utmc",
          path: "/",
          secure: false,
          value: "248670552",
        },
        {
          domain: ".wix.com",
          expiry: 1697020484,
          httpOnly: false,
          name: "__utma",
          path: "/",
          secure: false,
          value: "248670552.357226281.1633948462.1633948484.1633948484.1",
        },
        {
          domain: ".wix.com",
          expiry: 1633949084,
          httpOnly: false,
          name: "__utmt",
          path: "/",
          secure: false,
          value: "1",
        },
        {
          domain: ".wix.com",
          expiry: 1697020483,
          httpOnly: false,
          name: "_ga",
          path: "/",
          secure: false,
          value: "GA1.2.357226281.1633948462",
        },
        {
          domain: ".wix.com",
          expiry: 1639737282,
          httpOnly: false,
          name: "wixClient",
          path: "/",
          sameSite: "None",
          secure: true,
          value:
            "nirreich4||NOT_VERIFIED_OPT_IN|0|1633948482510|1639737282510|6cbe913f-410e-4c01-adb3-9b9191d31d08|{}|wix",
        },
        {
          domain: ".wix.com",
          expiry: 1641724486,
          httpOnly: false,
          name: "_fbp",
          path: "/",
          sameSite: "Lax",
          secure: false,
          value: "fb.1.1633948465104.378793928",
        },
        {
          domain: ".wix.com",
          expiry: 1633949064,
          httpOnly: false,
          name: "_px3",
          path: "/",
          sameSite: "Lax",
          secure: false,
          value:
            "d001ee8568490c76cebae9389658221bb013bd86f7b17931f179cd82b0bd796d:/OPZXCFiqzDje6Armpd/Q9uR7tSGgph4SixFzWr0WpEMCBbSp2NzyeQK4NIOGLTigBRIq7NwvzzpFNRu5xvT7Q==:1000:oSLmsIu5Vsv+nU4M9G3gYmuaxYNCTI0wVjr2UMoaKWYzdnA4SC4k3RxE1RWJF/WKdWHksxXeDQFchQ0uyKvxsLPUhW+wpu4vr2cITvdaur069R0xTVwizPjNdAll8n8QnMW5ChMf7PD1ocs9kxqJo3eNv9Td+MOa6JfnZpglM/TE/nAvsQx9nD77CjHOygYnVGh8h4oQXlj5AbqWqL1qbQ==",
        },
        {
          domain: ".wix.com",
          expiry: 1633962894,
          httpOnly: false,
          name: "_wixAB3|6cbe913f-410e-4c01-adb3-9b9191d31d08",
          path: "/",
          secure: false,
          value:
            "268550#1|175264#2|232814#2|150438#4|218208#1|164139#2|261409#1|262698#2|261000#1|236860#1|261358#1|262082#2|237659#2|231756#1|213671#2|239251#1|235885#2|260816#2|269193#2|211047#1|200674#4|185525#2|185798#1|261361#2|203287#2|240333#1|237658#2|238002#1|182661#2|220536#1|233548#1|241184#1|261108#1|239412#2|232564#2|268918#1|261352#1|234829#2|207438#1|205715#1|190452#1|241775#2|236643#2|261321#1|199602#1|239108#1",
        },
        {
          domain: ".wix.com",
          expiry: 1641724460,
          httpOnly: false,
          name: "_wixCIDX",
          path: "/",
          sameSite: "None",
          secure: true,
          value: "3949603c-e1d9-48cc-a964-437cb15f5916",
        },
        {
          domain: ".wix.com",
          expiry: 1634034883,
          httpOnly: false,
          name: "_gid",
          path: "/",
          secure: false,
          value: "GA1.2.145500687.1633948462",
        },
        {
          domain: ".wix.com",
          expiry: 1641724482,
          httpOnly: false,
          name: "userType",
          path: "/",
          secure: false,
          value: "REGISTERED",
        },
        {
          domain: ".wix.com",
          expiry: 1791628482,
          httpOnly: false,
          name: "wixLanguage",
          path: "/",
          sameSite: "Lax",
          secure: false,
          value: "en",
        },
        {
          domain: ".wix.com",
          expiry: 1641724482,
          httpOnly: false,
          name: "_wixUIDX",
          path: "/",
          sameSite: "None",
          secure: true,
          value: "1027153659|6cbe913f-410e-4c01-adb3-9b9191d31d08",
        },
        {
          domain: ".wix.com",
          httpOnly: false,
          name: "_wix_browser_sess",
          path: "/",
          secure: false,
          value: "e7364c38-17f0-4ae4-9763-8cf7c1c69935",
        },
        {
          domain: ".wix.com",
          expiry: 1649500494,
          httpOnly: false,
          name: "_wixAB3",
          path: "/",
          secure: false,
          value: "268696#1|227997#2",
        },
        {
          domain: ".wix.com",
          httpOnly: false,
          name: "XSRF-TOKEN",
          path: "/",
          sameSite: "None",
          secure: true,
          value: "1633948458|JSJu1rDPjW7K",
        },
        {
          domain: ".wix.com",
          expiry: 1641724461,
          httpOnly: false,
          name: "_gcl_au",
          path: "/",
          secure: false,
          value: "1.1.2112584062.1633948461",
        },
        {
          domain: ".wix.com",
          expiry: 1639737282,
          httpOnly: true,
          name: "wixSession2",
          path: "/",
          sameSite: "None",
          secure: true,
          value:
            "JWT.eyJraWQiOiJrdU42YlJQRCIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1widXNlckd1aWRcIjpcIjZjYmU5MTNmLTQxMGUtNGMwMS1hZGIzLTliOTE5MWQzMWQwOFwiLFwidXNlck5hbWVcIjpcIm5pcnJlaWNoNFwiLFwiY29sb3JzXCI6e30sXCJ1Y2RcIjpcIjIwMjEtMTAtMTBUMTE6MTk6MjcuMDAwKzAwMDBcIixcInd4c1wiOmZhbHNlLFwiZXd4ZFwiOmZhbHNlLFwiYW9yXCI6dHJ1ZSxcImFjaVwiOlwiNmNiZTkxM2YtNDEwZS00YzAxLWFkYjMtOWI5MTkxZDMxZDA4XCIsXCJybWJcIjp0cnVlLFwibHZsZFwiOlwiMjAyMS0xMC0xMVQxMDozNDo0Mi40NzcrMDAwMFwiLFwibGF0aFwiOlwiMjAyMS0xMC0xMVQxMDozNDo0Mi40NzcrMDAwMFwiLFwid3hleHBcIjpcIjIwMjEtMTAtMjZUMTA6MzQ6NDIuNTA3KzAwMDBcIn0iLCJpYXQiOjE2MzM5NDg0ODIsImV4cCI6MTYzNTI0NDQ4Mn0.erx7ZhrC16vjDf_7x0QPrawleyF4z35eXtU2wwfqPTN0bx9IxCB_ocslfEe-FW0JsaC_aCE7D9esdxP2uT2An1O38ZzJBZVNzJRjkKwQTAogY2FFhdEjqrky9VQKiYjquV_wesJNNITskXOfXJ6ZRQxRkUjgdX2XBR8GBIdNQZjyPdgc4FDn_Ow35QDUin2TCj9HoW5ZOSAVjw6jPNR-X5chibw1k_GwTzo-X_Io_jGmyi33Mco1sZLNuiy7ZwcQInKbkAQrTEOIngGqSfnARPxfhZToLeJEK8yfEWkw3IfXu0GBHo2QX-qHP6RcGrOHRVJSQRCI3UfY2OFXRg4qxw",
        },
        {
          domain: ".wix.com",
          expiry: 1633950284,
          httpOnly: false,
          name: "__utmb",
          path: "/",
          secure: false,
          value: "248670552.1.10.1633948484",
        },
        {
          domain: ".wix.com",
          expiry: 1665484461,
          httpOnly: false,
          name: "_pxvid",
          path: "/",
          sameSite: "Lax",
          secure: false,
          value: "cbb75151-2a7e-11ec-8f1a-705169706e71",
        },
      ];
      for (const cookie of cookies) {
        if (cookie.domain === ".wix.com") {
          await driver.manage().addCookie(cookie);
        }
      }

      await driver.get(url);
    } catch (error) {
      console.log("connectToWix func error: " + error);
    }
  };

  const getTheFrame = async (frame) => {
    try {
      await driver.switchTo().frame(frame);
      console.log("getTheFrame func: frame changed!");
    } catch (error) {
      console.log("getTheFrame func error: " + error);
    }
  };
  //--------------------------------------------------------------------
  try {
    await driver.get(url);
    await driver.manage().window().maximize();

    // connect to wix and switch to frame:
    await connectToWix();
    await driver.wait(
      until.elementLocated(By.css('iframe[id="preview"]')),
      10000
    );
    const frame = await driver.findElement(By.css('iframe[id="preview"]'));
    await getTheFrame(frame);

    // executing script:
    for (let index = 0; index < elementList.length; index++) {
      const element = elementList[index];
      const json = await buildComps(element);
      const fatherId = { id: "c1dmp", type: "DESKTOP" };

      const scriptCallback = [
        (fatherId, json) => {
          documentServices.components.add(fatherId, json);
        },
        fatherId,
        json,
      ];

      await driver.executeScript(...scriptCallback);
    }

    return "app runing!";
  } catch (error) {
    console.log("error at builderRun main func: " + error);
  }
};

module.exports = builderRun;

