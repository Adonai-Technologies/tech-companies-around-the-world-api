const express = require("express");
const app = express();
const PORT = 3000;

techCompaniesData = {
  Acer: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Adobe: {
    id: "2",
    company: "Adobe",
    "founder(s)": "John Warnock & Charles Geschke",
    ceo: "Shantanu Narayen",
    website: "https://www.adobe.com/"
  },

  Alibaba: {
    id: "3",
    company: "Alibabar",
    "founder(s)": "Jack Ma",
    ceo: "Jason Chen",
    website: "https://www.alibaba.com/"
  },

  Amazon: {
    id: "4",
    company: "Amazon",
    "founder(s)": "Jeff Bezos",
    ceo: "Jeff Bezos",
    website: "https://www.amazon.com/"
  },

  Anker: {
    id: "5",
    company: "Anker",
    "founder(s)": "Steven Yang",
    ceo: "Steven Yang",
    website: "https://www.anker.com/"
  },

  AMD: {
    id: "6",
    company: "Acer",
    "founder(s)": "Jerry Sanders",
    ceo: "Lisa Su",
    website: "https://www.amd.com/en.html"
  },

  Apple: {
    id: "7",
    company: "Apple",
    "founder(s)": "Steve Jobs, Steve Wozniak & Ronald Wayne",
    ceo: "Tim Cook",
    website: "https://www.apple.com/"
  },

  ARM: {
    id: "8",
    company: "ARM",
    "founder(s)": "Jamie Urquhart, Mike Muller, Tudor Brown, Lee Smith, John Biggs, Harry Oldham, Dave Howard, Pete Harrod, Harry Meekings, Al Thomas, Andy Merritt & David Sea",
    ceo: "Jason Chen",
    website: "https://www.arm.com/"
  },

  Asus: {
    id: "9",
    company: "Asus",
    "founder(s)": "Ted Hsu, M.T. Liao, Wayne Tsiah, T.H. Tung & Luca D.M",
    ceo: "Jonney Shih (Chairman)",
    website: "https://www.asus.com/"
  },

  Automattic: {
    id: "10",
    company: "Automattic",
    "founder(s)": "Matt Mullenweg",
    ceo: "Matt Mullenweg",
    website: "https://automattic.com/"
  },

  Broadcom: {
    id: "1",
    company: "Broadcom",
    "founder(s)": "(Started as a division of HP)",
    ceo: "Tan Hock Eng",
    website: "https://www.broadcom.com/"
  },

  ByteDance: {
    id: "11",
    company: "ByteDance",
    "founder(s)": "Zhang Yiming & Liang Rubo",
    ceo: "Zhang Yiming",
    website: "https://www.bytedance.com/"
  },

  Capgemini: {
    id: "12",
    company: "Capgemini",
    "founder(s)": "Serge Kampf",
    ceo: "Aiman Ezzat",
    website: "https://www.capgemini.com/"
  },

  Cisco: {
    id: "13",
    company: "Cisco",
    "founder(s)": "Leonard Bosack & Sandy Lerner",
    ceo: "Chuck Robbins",
    website: "https://www.cisco.com/"
  },

  Dell: {
    id: "14",
    company: "Dell",
    "founder(s)": "Michael Dell",
    ceo: "Michael Dell",
    website: "https://www.dell.com/en-gh/lp"
  },

  Dropboxi: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Dyson: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  eBay: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Facebook: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Foxconn: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Fujitsu: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  "Google(Alphabet)": {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Hive: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Honor: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  HP: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Huawei: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  IBM: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  "Instagram (Facebook)": {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Intel: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Kaspersky: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Lenovo: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  LG: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Logitech: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  McAfee: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Microsoft: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  "Nest (Google)": {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Netgear: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Nintendo: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Nokia: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Nvidia: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  OnePlus: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Oppo: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Oracle: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  "PayPal (eBay)": {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Philips: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  "Ring (Amazon)": {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Salesforce: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Samsung: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Shopify: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Softbank: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Sony: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Spotify: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Squarespace: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Tencent: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Tesla: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  "Texas Instruments": {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },
  "TP-Link": {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  "Tumblr (Automattic)": {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Twitter: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Vodafone: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Wix: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Qualcomm: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  "WordPress.com (Automattic)": {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  "Yahoo (Verizon Media)": {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  "YouTube (Google)": {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  Zoom: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api", (request, response) => {
  response.json(techCompaniesData);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}, better go catch it`);
});
