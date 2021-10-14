const webdriver = require("selenium-webdriver");
const axios = require("axios").default;

let documentServices = {
  components: {
    add: () => {},
    update: () => {},
  },
};

const unSortedList = [

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
  {
      "type": "title",
      "x": 772,
      "y": 16,
      "width": 142,
      "height": 30,
      "z_index": "19",
      "style": "",
      "text": "<p><p  style=\"color: rgba(255, 255, 255, 1); font-size: 20px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 26px; text-decoration-line: none;\" >              <span style=\"color: rgba(255, 255, 255, 1); font-size: 20px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 26px; text-decoration-line: none;\">neurosymptoms.org</span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 29,
      "y": 459,
      "width": 415,
      "height": 56,
      "z_index": "20",
      "style": "",
      "text": "<p><p  style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\" >              <span style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\">How to use this website ...</span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 584,
      "y": 464,
      "width": 155,
      "height": 56,
      "z_index": "25",
      "style": "",
      "text": "<p><p  style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\" >              <span style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\">Symptoms ...</span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 25,
      "y": 1004,
      "width": 536,
      "height": 132,
      "z_index": "26",
      "style": "",
      "text": "<p><p  style=\"color: rgba(0, 0, 0, 1); font-size: 16px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 21px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 16px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 21px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 16px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 21px; text-decoration-line: none;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 16px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 21px; text-decoration-line: none;\">DISCLAIMER: &nbsp;Please do not attempt to diagnose yourself or others using this website. The diagnosis of functional and dissociative neurological symptoms can be difficult and depends on having experience and knowledge of different neurological problems. </span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 16px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 21px; text-decoration-line: none;\">&nbsp;</span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 16px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 21px; text-decoration-line: none;\">The views of this website are those of the author alone and not those of NHS Lothian or the University of Edinburgh.</span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 19,
      "y": 919,
      "width": 343,
      "height": 63,
      "z_index": "47",
      "style": "",
      "text": "<p><p  style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\" >              <span style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\"> Downloads and Links ...</span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 30,
      "y": 1531,
      "width": 916,
      "height": 49,
      "z_index": "54",
      "style": "",
      "text": "<p><p  style=\"color: rgba(0, 0, 0, 1); font-size: 16px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 21px; text-decoration-line: none;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 16px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 21px; text-decoration-line: none;\">FUNDING: &nbsp;I'm grateful to the Neurology Research Fund of the Department of Clinical Neurosciences, Western General Hospital, Edinburgh for funding this website. The cost for the website for the first two years was less than £200. &nbsp;I'm especially grateful to Ian Laverty for raising money with this website in mind.</span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 34,
      "y": 1808,
      "width": 343,
      "height": 63,
      "z_index": "105",
      "style": "",
      "text": "<p><p  style=\"color: rgba(44, 44, 44, 1); font-size: 20px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 26px; text-decoration-line: none;\" >              <span style=\"color: rgba(44, 44, 44, 1); font-size: 20px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 26px; text-decoration-line: none;\">Neurosymptoms in other languages</span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 40,
      "y": 2413,
      "width": 343,
      "height": 63,
      "z_index": "159",
      "style": "",
      "text": "<p><p  style=\"color: rgba(44, 44, 44, 1); font-size: 20px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 26px; text-decoration-line: none;\" >              <span style=\"color: rgba(44, 44, 44, 1); font-size: 20px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 26px; text-decoration-line: none;\">Copyright and Terms and Conditions</span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 149,
      "y": 1200,
      "width": 343,
      "height": 39,
      "z_index": "161",
      "style": "",
      "text": "<p><p  style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\" >              <span style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\"><a style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\" href=\"/aboutnews/4594371625\" target=\"_self\">About the Author</a></span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 30,
      "y": 1165,
      "width": 343,
      "height": 36,
      "z_index": "168",
      "style": "",
      "text": "<p><p  style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\" >              <span style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\">Also on the site</span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 153,
      "y": 1360,
      "width": 343,
      "height": 36,
      "z_index": "174",
      "style": "",
      "text": "<p><p  style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\" >              <span style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\"><a style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\" href=\"/aboutnews/4594371625\" target=\"_self\">News / Twitter</a></span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 515,
      "y": 1162,
      "width": 343,
      "height": 36,
      "z_index": "176",
      "style": "",
      "text": "<p><p  style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\" >              <span style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\"><a style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: none;\" href=\"/links-downloads/4594358060\" target=\"_self\">Patient Organisations</a></span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 636,
      "y": 963,
      "width": 154,
      "height": 77,
      "z_index": "187",
      "style": "",
      "text": "<p><p  style=\"color: rgba(44, 44, 44, 1); font-size: 28px; font-family: \"PT Sans Narrow\"; font-weight: 700; font-style: normal; text-align: left; line-height: 36px; text-decoration-line: none;\" >              <span style=\"color: rgba(44, 44, 44, 1); font-size: 28px; font-family: \"PT Sans Narrow\"; font-weight: 700; font-style: normal; text-align: left; line-height: 36px; text-decoration-line: none;\"><a style=\"color: rgba(44, 44, 44, 1); font-size: 28px; font-family: \"PT Sans Narrow\"; font-weight: 700; font-style: normal; text-align: left; line-height: 36px; text-decoration-line: none;\" href=\"https://donate.ed.ac.uk/portal/public/donate/donate.aspx?destination=FunctionlDisordrRes\" target=\"_self\">DONATE</a></span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 150,
      "y": 1437,
      "width": 343,
      "height": 36,
      "z_index": "196",
      "style": "",
      "text": "<p><p  style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: underline;\" >              <span style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: underline;\"><a style=\"color: rgba(44, 44, 44, 1); font-size: 24px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 31px; text-decoration-line: underline;\" href=\"/video/4594371748\" target=\"_self\">Video</a></span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 26,
      "y": 807,
      "width": 400,
      "height": 41,
      "z_index": "199",
      "style": "",
      "text": "<p><p  style=\"color: rgba(44, 44, 44, 1); font-size: 28px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 36px; text-decoration-line: none;\" >              <span style=\"color: rgba(44, 44, 44, 1); font-size: 28px; font-family: \"PT Sans Narrow\"; font-weight: 400; font-style: normal; text-align: left; line-height: 36px; text-decoration-line: none;\">Update December 2018</span >          </p >      </p>"
  },
  {
      "type": "title",
      "x": 250,
      "y": 151,
      "width": 675,
      "height": 307,
      "z_index": "205",
      "style": "",
      "text": "<p><p  style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: italic; text-align: right; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: right; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">This website is about </span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">Functional Neurological Disorder (FND).</span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\"> This is when someone has:</span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">&nbsp;</span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\"> • NEUROLOGICAL SYMPTOMS (such as limb weakness, numbness, shaking or blackouts) which are</span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\"> • REAL (and not imagined) </span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\"> • caused by a PROBLEM with the FUNCTIONING of the nervous system</span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\"> • not due to damage or structural disease of the nervous system</span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\"> • causing difficulties for the person who experiences them</span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">&nbsp;</span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">Some people have troublesome symptoms that they wish to understand without necessarily having a 'disorder' - these are called functional neurological symptoms, and this site is for you too. </span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">&nbsp;</span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">FND and functional symptoms surprisingly common but can be difficult for patients and health professionals to understand. </span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">&nbsp;</span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">This website, written by a neurologist with a special interest in these problems, aims to give you a better understanding of these symptoms. It has no advertising and is free. I hope you find it useful</span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: right; line-height: 16px; text-decoration-line: none;\">&nbsp;</span >          </p >      <p  >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: italic; text-align: right; line-height: 16px; text-decoration-line: none;\">Professor Jon Stone, Consultant Neurologist, Edinburgh</span >          </p >      </p>"
  },
  {
      "type": "body",
      "x": 24,
      "y": 959,
      "width": 534,
      "height": 35,
      "z_index": "49",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\">Click on </span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" href=\"/links-downloads/4594358060\" target=\"_self\">Links and Downloads tab</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\">&nbsp;on the menu above to access a wide range of leaflets, booklets and internet links</span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 129,
      "y": 1907,
      "width": 346,
      "height": 52,
      "z_index": "55",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" href=\"http://www.funktionellasymptom.se/\" target=\"_self\">SWEDISH</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://www.funktionellasymptom.se/\" target=\"_self\">&nbsp;Translation by Dr Michael Mayza, Neurologist</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://www.funktionellasymptom.se/\" target=\"_self\">www.funktionellasymptom.se</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://www.funktionellasymptom.se/\" target=\"_self\">Click flag to go there</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 129,
      "y": 1963,
      "width": 346,
      "height": 60,
      "z_index": "62",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\">DUTCH</span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\">&nbsp;Translation in progress by Prof Rien Vermeulen, Neurologist, Amsterdam and Jeannette Gelauff</span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\">functionelesymptomen.moonfruit.com</span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" href=\"functionelesymptomen.moonfruit.com\" target=\"_self\">Click flag to go there</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 129,
      "y": 2029,
      "width": 346,
      "height": 60,
      "z_index": "67",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" href=\"http://www.neurosintomas.org\" target=\"_self\">www.neurosintomas.org</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a href=\"http://www.neurosintomas.org\" target=\"_self\">SPANISH</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a href=\"http://www.neurosintomas.org\" target=\"_self\">&nbsp;Translation by Dr Maria Corretge and David Garcia</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a href=\"http://www.neurosintomas.org\" target=\"_self\">Click flag to go there</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 926,
      "y": 135,
      "width": 59,
      "height": 15,
      "z_index": "72",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 9px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 11px; text-decoration-line: none;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 9px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 11px; text-decoration-line: none;\">Translation?</span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 35,
      "y": 1850,
      "width": 936,
      "height": 100,
      "z_index": "106",
      "style": "",
      "text": "<p><p style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">I am very honoured that neurology, medical and nursing colleagues in a wide range of countries have contacted me to arrange a translation of neurosymptoms.org in to other languages. Words and meanings change in different cultures and so it was important that these sites were adapted by professionals familiar with the topic. Some of these sites are complete. Others are in development</span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 613,
      "y": 1904,
      "width": 346,
      "height": 49,
      "z_index": "111",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" href=\"http://www.neurosintomi.org\" target=\"_self\">ITALIAN</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://www.neurosintomi.org\" target=\"_self\">. Translation by Prof Michele Tinazzi, Neurologist and Dr Tommaso Bovi, Neurologist, Universiy of Verona</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://www.neurosintomi.org\" target=\"_self\">www.neurosintomi.org &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Click flag to go there</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 613,
      "y": 1961,
      "width": 346,
      "height": 60,
      "z_index": "112",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" href=\"http://neurosimptomy.moonfruit.com\" target=\"_self\">RUSSIAN&nbsp;</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://neurosimptomy.moonfruit.com\" target=\"_self\">Translation in progress by Prof Galina Diukova, Neurologist, Moscow and team </a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://neurosimptomy.moonfruit.com\" target=\"_self\">neurosymptomi.moonfruit.com</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://neurosimptomy.moonfruit.com\" target=\"_self\">Click flag to go there</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 613,
      "y": 2029,
      "width": 346,
      "height": 58,
      "z_index": "113",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" href=\"http://neurosymptomes.moonfruit.com\" target=\"_self\">FRENCH</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://neurosymptomes.moonfruit.com\" target=\"_self\">&nbsp;Translation by Dr Selma Aybek, Dimitri Horn and Dr Hélène Esvant &nbsp;</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://neurosymptomes.moonfruit.com\" target=\"_self\">Click flag to go there</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 128,
      "y": 2096,
      "width": 346,
      "height": 58,
      "z_index": "115",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" href=\"http://www.neurosintomaspt.org\" target=\"_blank\">www.neurosintomaspt.org</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a href=\"http://www.neurosintomaspt.org\" target=\"_blank\">PORTUGUESE&nbsp;</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a href=\"http://www.neurosintomaspt.org\" target=\"_blank\">Translation by Dr João Massano, Neurologist</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a href=\"http://www.neurosintomaspt.org\" target=\"_blank\">Click flag to go there</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 612,
      "y": 2098,
      "width": 346,
      "height": 51,
      "z_index": "120",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" href=\"http://neurosymptomes.moonfruit.com\" target=\"_self\">CZECH</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://neurosymptomes.moonfruit.com\" target=\"_self\"> Translation by Dr Tereza Serranova, N</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\">eurologist, Prague </span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://neurosymptomes.moonfruit.com\" target=\"_self\">Click flag to go there</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 612,
      "y": 2158,
      "width": 346,
      "height": 48,
      "z_index": "127",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" href=\"http://neurosymptomes.moonfruit.com\" target=\"_self\">G</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://neurosymptomes.moonfruit.com\" target=\"_self\">ERMAN</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://neurosymptomes.moonfruit.com\" target=\"_self\">&nbsp;</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a href=\"www.neurosymptome.org\" target=\"_self\">www.neurosymptome.org</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://neurosymptomes.moonfruit.com\" target=\"_self\">Translation by Assisant Prof Petra Schwingenschuh, N</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\">eurologist, Graz</span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://neurosymptomes.moonfruit.com\" target=\"_self\">. Click flag to go there</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 128,
      "y": 2160,
      "width": 346,
      "height": 46,
      "z_index": "133",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" href=\"http://neurosymptomysk.moonfruit.com/\" target=\"_self\">SLOVAKIA</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a href=\"http://neurosymptomysk.moonfruit.com/\" target=\"_self\">. Translation by Dr Zuzana Dean, Neurologist</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a href=\"http://neurosymptomysk.moonfruit.com/\" target=\"_self\">Click flag to go there</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 613,
      "y": 2218,
      "width": 346,
      "height": 58,
      "z_index": "153",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\" href=\"http://neurosymptomsjp.kk5.org/\" target=\"_self\">JAPANESE </a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: none;\"><a href=\"http://neurosymptomsjp.kk5.org/\" target=\"_self\">Translation by Dr Akihiro Koreki, Neuropsychiatrist, Tokyo, Japan</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 128,
      "y": 2220,
      "width": 346,
      "height": 58,
      "z_index": "156",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" href=\"http://neurosymptomata.kk5.org/\" target=\"_self\">GREEK</a></span ><span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a href=\"http://neurosymptomata.kk5.org/\" target=\"_self\">. Translation by Dr Maria Kinali, Paediatric Neurologist. and Dr Victoria Vlachou London</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a href=\"http://neurosymptomata.kk5.org/\" target=\"_self\">Click flag to go there</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 42,
      "y": 2456,
      "width": 926,
      "height": 179,
      "z_index": "160",
      "style": "",
      "text": "<p><p style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">All material on this site is</span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\"> copyright of Prof Jon Stone. All Rights Reserved </span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">unless specifically stated otherwise. Original material from this site should not be copied without permission. Please let me know if you want to borrow or reproduce any text from this site by emailing Jon.Stone@ed.ac.uk.</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">&nbsp;</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">I do not collect (and do not have the facility for collecting) &nbsp;data from individuals who visit this site.</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">&nbsp;</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">Like most website operators, neurosymptoms.org and its translations collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Our purpose in collecting non-personally identifying information is to better understand how &nbsp;visitors use its website. From time to time, neurosymptoms.org may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website as an aggregated statistic</span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 150,
      "y": 1251,
      "width": 384,
      "height": 106,
      "z_index": "164",
      "style": "",
      "text": "<p><p style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\"><a style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" href=\"/aboutnews/4594371625\" target=\"_self\">Professor Jon Stone MBChB FRCP PhD, </a></span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\"><a href=\"/aboutnews/4594371625\" target=\"_self\">Consultant Neurologist (NHS Lothian) and </a></span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\"><a href=\"/aboutnews/4594371625\" target=\"_self\">Honorary Professor in Neurology (University of Edinburgh</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\"><a href=\"/aboutnews/4594371625\" target=\"_self\">)</a></span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">&nbsp;</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\"><a href=\"/aboutnews/4594371625\" target=\"_self\">Click on 'About/News' to read more</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 275,
      "y": 1629,
      "width": 674,
      "height": 170,
      "z_index": "167",
      "style": "",
      "text": "<p><p style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\"><a style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" href=\"http://www..fnforum.org\" target=\"_self\">Functional Neurological Forum</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\"><a href=\"http://www..fnforum.org\" target=\"_self\"> -</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\"><a href=\"http://www..fnforum.org\" target=\"_blank\">&nbsp;</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\"><a href=\"http://www.fnforum.org\" target=\"_blank\">www.fnforum.org</a></span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">Functional Neurological forum launched in 2015 as an umbrella organisation for health professionals interested in functional neurological disorders and symptoms. This includes neurologists, physiotherapists, psychiatrists, psychologists, occupational therapists, rehabilitation physicians, speech and language therapists and patients interested in promoting awareness of FND</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">&nbsp;</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">Anyone can join fnforum including patients but it is designed as a forum to bring together health professionals, inform them of conferences and other events. If you are looking for a </span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\"><a href=\"/links-downloads/4594358060\" target=\"_self\">patient forum </a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">see the links on the</span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\"><a href=\"/links-downloads/4594358060\" target=\"_self\"> links page</a></span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">&nbsp;</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">Sign up at </span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\"><a href=\"http://www.fnforum.org\" target=\"_blank\">www.fnforum.org</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 149,
      "y": 1397,
      "width": 384,
      "height": 29,
      "z_index": "175",
      "style": "",
      "text": "<p><p style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\"><a style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: underline;\" href=\"/aboutnews/4594371625\" target=\"_self\">Links to news via twitter</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 762,
      "y": 1402,
      "width": 207,
      "height": 67,
      "z_index": "179",
      "style": "",
      "text": "<p><p style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: center; line-height: 15px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: center; line-height: 15px; text-decoration-line: none;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: center; line-height: 15px; text-decoration-line: none;\">Many excellent patient led organisations provide information and support for FND</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: center; line-height: 15px; text-decoration-line: none;\">Click </span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: center; line-height: 15px; text-decoration-line: underline;\"><a style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: center; line-height: 15px; text-decoration-line: underline;\" href=\"/links-downloads/4594358060\" target=\"_self\">here</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: center; line-height: 15px; text-decoration-line: none;\"> for more information </span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 637,
      "y": 991,
      "width": 177,
      "height": 21,
      "z_index": "188",
      "style": "",
      "text": "<p><p style=\"color: rgba(0, 0, 0, 1); font-size: 14px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 17px; text-decoration-line: none;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 14px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 17px; text-decoration-line: none;\"><a style=\"color: rgba(0, 0, 0, 1); font-size: 14px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 17px; text-decoration-line: none;\" href=\"https://donate.ed.ac.uk/portal/public/donate/donate.aspx?destination=FunctionlDisordrRes\" target=\"_self\">to neurosymptoms.org</a></span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 29,
      "y": 509,
      "width": 534,
      "height": 304,
      "z_index": "190",
      "style": "",
      "text": "<p><p style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">Most people with functional or dissociative neurological symptoms have a combination of symptoms like \"weakness, numbness and fatigue\" or \"blackouts and sleep problems\"</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">&nbsp;</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">Click on a symptom on the right or use the menu above to explore the </span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\"><a style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\" style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\" href=\"/symptoms/4594357993\" target=\"_self\">symptoms</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">&nbsp;that are relevant to you.</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">&nbsp;</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">Click on ‘</span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\"><a href=\"/causes/4594358020\" target=\"_self\">Causes</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">’ to discover what is known about....</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">&nbsp;</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">•what is going wrong in the body when they do happen.(</span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\"><a href=\"/causes/4594358020\" target=\"_self\">Mechanisms</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">) and</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">•why people become vulnerable to these symptoms (</span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\"><a href=\"/why-has-it-happened/4594358021\" target=\"_self\">Causes</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">) </span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">• &nbsp; &nbsp; what is known about the accuracy of the diagnosis (Misdiagnosis) </span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">&nbsp;</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">Click on </span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\"><a href=\"/not-imagined/4594358022\" target=\"_self\">'Not imagined</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">’ for some answers to this issue</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">&nbsp;</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">Click on ‘</span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\"><a href=\"/treatment/4594358024\" target=\"_self\">Treatment</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">’ for discussion of what treatments may help</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">&nbsp;</span >          </p>      <p >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">Click on </span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\"><a href=\"/video/4594371748\" target=\"_self\">'Videos'</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\"> or ‘</span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: underline;\"><a href=\"/page/4594358059\" target=\"_self\">Stories</a></span ><span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">' for some real patient stories</span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 149,
      "y": 1471,
      "width": 384,
      "height": 34,
      "z_index": "195",
      "style": "",
      "text": "<p><p style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 12px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 15px; text-decoration-line: none;\">Video clips relating to FND</span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 27,
      "y": 852,
      "width": 532,
      "height": 100,
      "z_index": "200",
      "style": "",
      "text": "<p><p style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\" >              <span style=\"color: rgba(0, 0, 0, 1); font-size: 13px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 16px; text-decoration-line: none;\">I have carried out an interim update of the site in December - to obtain a security certificate and move off the Adobe Flash platform. The site now runs in html5. Hope you like it it! Jon Stone</span >          </p>      </p>"
  },
  {
      "type": "body",
      "x": 127,
      "y": 2288,
      "width": 346,
      "height": 58,
      "z_index": "207",
      "style": "",
      "text": "<p><p style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 700; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\" href=\"http://neurosintomasbrasil.kk5.org/\" target=\"_blank\">BRAZILIAN PORTUGESE</a></span >          </p>      <p >              <span style=\"color: rgba(51, 68, 0, 1); font-size: 11px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-align: left; line-height: 13px; text-decoration-line: underline;\"><a href=\"http://neurosintomasbrasil.kk5.org/\" target=\"_blank\">Translation by Dr Bruna Bartorelli, Psychiatrist, University of São Paulo</a></span >          </p>      </p>"
  },
  {
      "type": "img",
      "x": 922,
      "y": 16,
      "width": 55,
      "height": 58,
      "z_index": "17",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740908_55x58.jpg"
  },
  {
      "type": "img",
      "x": 18,
      "y": 152,
      "width": 220,
      "height": 242,
      "z_index": "23",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740908_220x242.jpg"
  },
  {
      "type": "img",
      "x": 939,
      "y": 180,
      "width": 31,
      "height": 18,
      "z_index": "66",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740947.gif"
  },
  {
      "type": "img",
      "x": 35,
      "y": 2033,
      "width": 74,
      "height": 50,
      "z_index": "68",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740947.gif"
  },
  {
      "type": "img",
      "x": 35,
      "y": 1965,
      "width": 75,
      "height": 52,
      "z_index": "98",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740918.gif"
  },
  {
      "type": "img",
      "x": 36,
      "y": 1907,
      "width": 75,
      "height": 48,
      "z_index": "99",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740950_75x48.jpg"
  },
  {
      "type": "img",
      "x": 940,
      "y": 268,
      "width": 30,
      "height": 20,
      "z_index": "100",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740918.gif"
  },
  {
      "type": "img",
      "x": 940,
      "y": 153,
      "width": 31,
      "height": 20,
      "z_index": "101",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740950_31x20.jpg"
  },
  {
      "type": "img",
      "x": 940,
      "y": 291,
      "width": 29,
      "height": 20,
      "z_index": "102",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740912.gif"
  },
  {
      "type": "img",
      "x": 940,
      "y": 199,
      "width": 30,
      "height": 18,
      "z_index": "103",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740933.gif"
  },
  {
      "type": "img",
      "x": 525,
      "y": 1907,
      "width": 71,
      "height": 44,
      "z_index": "107",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740912.gif"
  },
  {
      "type": "img",
      "x": 526,
      "y": 1967,
      "width": 73,
      "height": 48,
      "z_index": "108",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740933.gif"
  },
  {
      "type": "img",
      "x": 525,
      "y": 2034,
      "width": 74,
      "height": 49,
      "z_index": "109",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740903_74x49.png"
  },
  {
      "type": "img",
      "x": 940,
      "y": 222,
      "width": 28,
      "height": 19,
      "z_index": "116",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740928.gif"
  },
  {
      "type": "img",
      "x": 38,
      "y": 2107,
      "width": 69,
      "height": 43,
      "z_index": "117",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740928.gif"
  },
  {
      "type": "img",
      "x": 940,
      "y": 337,
      "width": 29,
      "height": 17,
      "z_index": "118",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740880_29x17.jpg"
  },
  {
      "type": "img",
      "x": 525,
      "y": 2102,
      "width": 73,
      "height": 45,
      "z_index": "119",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740880_73x45.jpg"
  },
  {
      "type": "img",
      "x": 940,
      "y": 245,
      "width": 29,
      "height": 19,
      "z_index": "121",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740894_29x19.png"
  },
  {
      "type": "img",
      "x": 526,
      "y": 2159,
      "width": 74,
      "height": 45,
      "z_index": "128",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740894_74x45.png"
  },
  {
      "type": "img",
      "x": 39,
      "y": 2160,
      "width": 70,
      "height": 47,
      "z_index": "136",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740940_70x47.jpg"
  },
  {
      "type": "img",
      "x": 940,
      "y": 360,
      "width": 29,
      "height": 20,
      "z_index": "137",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740940_29x20.jpg"
  },
  {
      "type": "img",
      "x": 940,
      "y": 314,
      "width": 31,
      "height": 20,
      "z_index": "138",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740800_31x20.jpg"
  },
  {
      "type": "img",
      "x": 940,
      "y": 386,
      "width": 26,
      "height": 17,
      "z_index": "149",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740806_26x17.jpg"
  },
  {
      "type": "img",
      "x": 940,
      "y": 409,
      "width": 29,
      "height": 18,
      "z_index": "151",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740803_29x18.png"
  },
  {
      "type": "img",
      "x": 40,
      "y": 2222,
      "width": 68,
      "height": 44,
      "z_index": "157",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740803_68x44.png"
  },
  {
      "type": "img",
      "x": 528,
      "y": 2217,
      "width": 77,
      "height": 58,
      "z_index": "158",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740806_77x58.jpg"
  },
  {
      "type": "img",
      "x": 75,
      "y": 1365,
      "width": 47,
      "height": 43,
      "z_index": "173",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/_app/1611515228/en/simplemedia/socialIcons/tw-col-large.png"
  },
  {
      "type": "img",
      "x": 514,
      "y": 1206,
      "width": 155,
      "height": 79,
      "z_index": "180",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634810679_155x79.png"
  },
  {
      "type": "img",
      "x": 575,
      "y": 959,
      "width": 231,
      "height": 59,
      "z_index": "186",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/_imgstore/9/4013612269/page_welcome_fD1ve1whxjEYTLK3FqoCR/amtMRINcd4SdQMVO445cixsx11k.png"
  },
  {
      "type": "img",
      "x": 68,
      "y": 1437,
      "width": 53,
      "height": 52,
      "z_index": "197",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634810765_53x52.png"
  },
  {
      "type": "img",
      "x": 940,
      "y": 435,
      "width": 31,
      "height": 23,
      "z_index": "206",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4637600414_31x23.png"
  },
  {
      "type": "img",
      "x": 42,
      "y": 2289,
      "width": 68,
      "height": 50,
      "z_index": "208",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4637600414_68x50.png"
  },
  {
      "type": "img",
      "x": 667,
      "y": 1289,
      "width": 139,
      "height": 52,
      "z_index": "209",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634810677_139x52.png"
  },
  {
      "type": "img",
      "x": 520,
      "y": 1286,
      "width": 145,
      "height": 83,
      "z_index": "210",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634810686_145x83.png"
  },
  {
      "type": "img",
      "x": 816,
      "y": 1203,
      "width": 144,
      "height": 145,
      "z_index": "211",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4635626848_144x145.png"
  },
  {
      "type": "img",
      "x": 613,
      "y": 1398,
      "width": 125,
      "height": 79,
      "z_index": "212",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740797_125x79.jpg"
  },
  {
      "type": "img",
      "x": 679,
      "y": 1208,
      "width": 158,
      "height": 69,
      "z_index": "213",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634810678_158x69.png"
  },
  {
      "type": "img",
      "x": 48,
      "y": 1218,
      "width": 84,
      "height": 108,
      "z_index": "214",
      "style": "",
      "src": "http://neurosymptomsnew.kk5.org/communities/9/004/013/612/269//images/4634740808_84x108.jpg"
  },
  {
      "type": "button",
      "x": 577,
      "y": 509,
      "width": 179,
      "height": 26,
      "z_index": "73",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/functional-limb-weakness/4594357994",
      "btnLable": "Functional Limb Weakness"
  },
  {
      "type": "button",
      "x": 773,
      "y": 509,
      "width": 179,
      "height": 26,
      "z_index": "75",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/functional-tremor/4594357998",
      "btnLable": "Functional Tremor"
  },
  {
      "type": "button",
      "x": 577,
      "y": 539,
      "width": 179,
      "height": 26,
      "z_index": "76",
      "style": {
          "backgroundOpacity": "0.48",
          "backgroundColor": "rgba(135, 182, 17, 0.48)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.48)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/blackoutsattacks/4594357995",
      "btnLable": "Blackouts / Attacks"
  },
  {
      "type": "button",
      "x": 773,
      "y": 539,
      "width": 181,
      "height": 26,
      "z_index": "77",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/functional-dystonia/4594358007",
      "btnLable": "Functional Dystonia/Spasm"
  },
  {
      "type": "button",
      "x": 577,
      "y": 569,
      "width": 180,
      "height": 26,
      "z_index": "78",
      "style": {
          "backgroundOpacity": "0.51",
          "backgroundColor": "rgba(135, 182, 17, 0.51)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.51)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/sensory-symptoms/4594357996",
      "btnLable": "Sensory Symptoms"
  },
  {
      "type": "button",
      "x": 773,
      "y": 569,
      "width": 180,
      "height": 26,
      "z_index": "79",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/functional-gait-disorder/4594358008",
      "btnLable": "Functional Walking Problems"
  },
  {
      "type": "button",
      "x": 577,
      "y": 599,
      "width": 182,
      "height": 26,
      "z_index": "80",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/pain/4594358001",
      "btnLable": "Pain"
  },
  {
      "type": "button",
      "x": 773,
      "y": 599,
      "width": 180,
      "height": 26,
      "z_index": "81",
      "style": {
          "backgroundOpacity": "0.52",
          "backgroundColor": "rgba(135, 182, 17, 0.52)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.52)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/speech-swallowing/4594358004",
      "btnLable": "Word Finding Difficulty"
  },
  {
      "type": "button",
      "x": 577,
      "y": 629,
      "width": 181,
      "height": 26,
      "z_index": "82",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/fatigue/4594358000",
      "btnLable": "Tiredness / Fatigue"
  },
  {
      "type": "button",
      "x": 773,
      "y": 629,
      "width": 180,
      "height": 26,
      "z_index": "83",
      "style": {
          "backgroundOpacity": "0.48",
          "backgroundColor": "rgba(135, 182, 17, 0.48)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.48)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/speech-swallowing/4594358004",
      "btnLable": "Slurred Speech"
  },
  {
      "type": "button",
      "x": 577,
      "y": 659,
      "width": 181,
      "height": 26,
      "z_index": "84",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/sleep-problems/4594358002",
      "btnLable": "Sleep Problems"
  },
  {
      "type": "button",
      "x": 773,
      "y": 659,
      "width": 180,
      "height": 26,
      "z_index": "85",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/bladder/4594358013",
      "btnLable": "Bladder Symptoms"
  },
  {
      "type": "button",
      "x": 577,
      "y": 689,
      "width": 176,
      "height": 24,
      "z_index": "86",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/memory-concentration/4594358003",
      "btnLable": "Poor Memory / Concentration"
  },
  {
      "type": "button",
      "x": 773,
      "y": 689,
      "width": 181,
      "height": 26,
      "z_index": "87",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/other-symptoms/4594358019",
      "btnLable": "Bowel Symptoms"
  },
  {
      "type": "button",
      "x": 577,
      "y": 719,
      "width": 181,
      "height": 26,
      "z_index": "88",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/dissociative-symptoms/4594357999",
      "btnLable": "Dissociation"
  },
  {
      "type": "button",
      "x": 577,
      "y": 839,
      "width": 179,
      "height": 26,
      "z_index": "89",
      "style": {
          "backgroundOpacity": "0.51",
          "backgroundColor": "rgba(135, 182, 17, 0.51)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.51)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/low-mood/4594358016",
      "btnLable": "Low Mood"
  },
  {
      "type": "button",
      "x": 577,
      "y": 749,
      "width": 174,
      "height": 26,
      "z_index": "90",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/worry-panic/4594358014",
      "btnLable": "Worry / Panic"
  },
  {
      "type": "button",
      "x": 773,
      "y": 749,
      "width": 181,
      "height": 26,
      "z_index": "91",
      "style": {
          "backgroundOpacity": "0.51",
          "backgroundColor": "rgba(135, 182, 17, 0.51)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.51)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/speech-swallowing/4594358004",
      "btnLable": "Swallowing Problems"
  },
  {
      "type": "button",
      "x": 577,
      "y": 779,
      "width": 180,
      "height": 26,
      "z_index": "92",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/dizziness/4594358005",
      "btnLable": "Dizziness"
  },
  {
      "type": "button",
      "x": 773,
      "y": 779,
      "width": 179,
      "height": 26,
      "z_index": "93",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/complex-regional-pain/4594358017",
      "btnLable": "Complex Regional Pain"
  },
  {
      "type": "button",
      "x": 577,
      "y": 809,
      "width": 181,
      "height": 26,
      "z_index": "94",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/headache/4594358011",
      "btnLable": "Headache"
  },
  {
      "type": "button",
      "x": 773,
      "y": 869,
      "width": 179,
      "height": 26,
      "z_index": "95",
      "style": {
          "backgroundOpacity": "0.48",
          "backgroundColor": "rgba(135, 182, 17, 0.48)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.48)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/functional-jerks-and-twitches/4594358010",
      "btnLable": "Functional Jerks and Twitches"
  },
  {
      "type": "button",
      "x": 773,
      "y": 809,
      "width": 180,
      "height": 26,
      "z_index": "96",
      "style": {
          "backgroundOpacity": "0.48",
          "backgroundColor": "rgba(135, 182, 17, 0.48)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.48)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/health-anxiety/4594358015",
      "btnLable": "Health Anxiety"
  },
  {
      "type": "button",
      "x": 577,
      "y": 869,
      "width": 180,
      "height": 26,
      "z_index": "97",
      "style": {
          "backgroundOpacity": "0.52",
          "backgroundColor": "rgba(135, 182, 17, 0.52)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.52)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/facial-symptoms/4594358009",
      "btnLable": "Facial Spasm"
  },
  {
      "type": "button",
      "x": 773,
      "y": 719,
      "width": 180,
      "height": 26,
      "z_index": "129",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/drop-attacks/4594358006",
      "btnLable": "Drop Attacks"
  },
  {
      "type": "button",
      "x": 773,
      "y": 839,
      "width": 179,
      "height": 26,
      "z_index": "130",
      "style": {
          "backgroundOpacity": "0.48",
          "backgroundColor": "rgba(135, 182, 17, 0.48)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.48)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/post-concussion-syndrome/4594358012",
      "btnLable": "Post-Concussion Syndrome"
  },
  {
      "type": "button",
      "x": 773,
      "y": 899,
      "width": 180,
      "height": 26,
      "z_index": "131",
      "style": {
          "backgroundOpacity": "0.49",
          "backgroundColor": "rgba(135, 182, 17, 0.49)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.49)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/other-symptoms/4594358019",
      "btnLable": "Other Symptoms"
  },
  {
      "type": "button",
      "x": 577,
      "y": 899,
      "width": 180,
      "height": 26,
      "z_index": "132",
      "style": {
          "backgroundOpacity": "0.48",
          "backgroundColor": "rgba(135, 182, 17, 0.48)",
          "backgroundImage": "none",
          "borderColor": "rgba(135, 182, 17, 0.48)",
          "borderWidth": "0px",
          "borderRadius": "100px",
          "borderStyle": "solid",
          "shadow": "none"
      },
      "href": "http://neurosymptomsnew.kk5.org/visual-symptoms/4594358018",
      "btnLable": "Visual Symptoms"
  }
]
const elementList = unSortedList.sort((a,b)=>a.z_index-b.z_index)

const handelPics = async (imgName,imgUrl) => {
 try {
  
  const url =`https://bo.wix.com/site-migration-site-builder/uploadImages?userId=${wixUIDX}&metasiteId=${metaId}`;
  const {data} = await axios.post(
    url,
    [{
      
        "imageName": `${imgName}`,
        "imageUrl": `${imgUrl}`
    }],
    {
    headers: {
      'Authorization': auth,
      "Content-Type": "application/json"
    },
  })
  return data
 } catch (error) {
   console.log(error)
 }
  
};


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
      //---------------img model-----------
      if (json.src.includes(".jpg") || json.src.includes(".png") || json.src.includes(".gif")) {
        const imgData = await handelPics(json.type,json.src)
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
            uri: imgData[0].fileName,
            type: "Image",
            description: "",
          },
          props: {
            type: "WPhotoProperties",
          },
          style: "wp2",
        };
      }
      
    } else if (json.type === "button") {
      //---------------button model----------

      return {
        type: "Component",
        skin: "wixui.skins.Skinless",
        layout: {
          width: json.width,
          height: json.height,
          x: json.x,
          y: json.y,
        },
        componentType: "wixui.StylableButton",
        metaData: {
          pageId: "",
        },
        parent: "comp-k3oaa1vk",
        props: {
          type: "StylableButtonProperties",
        },
        data: {
          type: "StylableButton",
          metaData: {
            isPreset: false,
            schemaVersion: "1.0",
            isHidden: false,
          },
          link: json.href || "",
          label: json.btnLable,
          svgId: "b861b040274141de9c08999ec3b76edf.svg",
        },
        style: {
          type: "ComponentStyle",
          metaData: {
            isPreset: false,
            schemaVersion: "1.0",
            isHidden: false,
            pageId: "",
          },
          style: {
            properties: {
              "$st-css": `:import{
          -st-from: 'wix-ui-santa/index.st.css';
          -st-named: StylableButton;
        }
        .root{
          -st-extends: StylableButton;
          transition: "";
          border: ${json.style.borderWidth} solid;
          border-radius: ${json.style.borderRadius};
          box-shadow: ${json.style.shadow};
          background: ${json.style.backgroundColor};
          border-color: ${json.style.borderColor};
        }
        .root:hover{
          border: ${json.style.borderWidth} solid;
          background: ${json.style.backgroundColor};
          border-radius: ${json.style.borderRadius};
          box-shadow: ${json.style.shadow};
          border-color: ${json.style.borderColor};
        }
        .root::container{
          transition: inherit;
        }
        .root::icon{
          transition: inherit;
          width: 14px;
          height: 14px;
          fill: rgba(255, 255, 255, 1);
          display: none;
        }`,
            },
            propertiesSource: {
              "$st-css": "value",
            },
          },
          componentClassName: "wixui.StylableButton",
          pageId: "",
          compId: "",
          styleType: "custom",
          skin: "wixui.skins.Skinless",
        },
        activeModes: {},
        id: "",
      };
    }
  } catch (error) {
    console.log("buildComps func error: " + error);
  }
};



//--------------------------------------------------------------------
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

    return "app finished!";
  } catch (error) {
    console.log("error at builderRun main func: " + error);
  }
};

module.exports = builderRun;
