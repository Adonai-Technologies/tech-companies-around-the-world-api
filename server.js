const express = require("express");
const app = express();
const herokuPort = process.env.PORT;
const PORT = 3000;

techCompaniesData = {
  acer: {
    id: "1",
    company: "Acer",
    "founder(s)": "Stan Shih, Carolyn Yeh & George Huang",
    ceo: "Jason Chen",
    website: "https://www.acer.com/us-en/"
  },

  adobe: {
    id: "2",
    company: "Adobe",
    "founder(s)": "John Warnock & Charles Geschke",
    ceo: "Shantanu Narayen",
    website: "https://www.adobe.com/"
  },

  alibaba: {
    id: "3",
    company: "Alibabar",
    "founder(s)": "Jack Ma",
    ceo: "Jason Chen",
    website: "https://www.alibaba.com/"
  },

  amazon: {
    id: "4",
    company: "Amazon",
    "founder(s)": "Jeff Bezos",
    ceo: "Jeff Bezos",
    website: "https://www.amazon.com/"
  },

  anker: {
    id: "5",
    company: "Anker",
    "founder(s)": "Steven Yang",
    ceo: "Steven Yang",
    website: "https://www.anker.com/"
  },

  amd: {
    id: "6",
    company: "Acer",
    "founder(s)": "Jerry Sanders",
    ceo: "Lisa Su",
    website: "https://www.amd.com/en.html"
  },

  apple: {
    id: "7",
    company: "Apple",
    "founder(s)": "Steve Jobs, Steve Wozniak & Ronald Wayne",
    ceo: "Tim Cook",
    website: "https://www.apple.com/"
  },

  arm: {
    id: "8",
    company: "ARM",
    "founder(s)":
      "Jamie Urquhart, Mike Muller, Tudor Brown, Lee Smith, John Biggs, Harry Oldham, Dave Howard, Pete Harrod, Harry Meekings, Al Thomas, Andy Merritt & David Sea",
    ceo: "Jason Chen",
    website: "https://www.arm.com/"
  },

  asus: {
    id: "9",
    company: "Asus",
    "founder(s)": "Ted Hsu, M.T. Liao, Wayne Tsiah, T.H. Tung & Luca D.M",
    ceo: "Jonney Shih (Chairman)",
    website: "https://www.asus.com/"
  },

  automattic: {
    id: "10",
    company: "Automattic",
    "founder(s)": "Matt Mullenweg",
    ceo: "Matt Mullenweg",
    website: "https://automattic.com/"
  },

  broadcom: {
    id: "11",
    company: "Broadcom",
    "founder(s)": "(Started as a division of HP)",
    ceo: "Tan Hock Eng",
    website: "https://www.broadcom.com/"
  },

  byteDance: {
    id: "12",
    company: "ByteDance",
    "founder(s)": "Zhang Yiming & Liang Rubo",
    ceo: "Zhang Yiming",
    website: "https://www.bytedance.com/"
  },

  capgemini: {
    id: "13",
    company: "Capgemini",
    "founder(s)": "Serge Kampf",
    ceo: "Aiman Ezzat",
    website: "https://www.capgemini.com/"
  },

  cisco: {
    id: "14",
    company: "Cisco",
    "founder(s)": "Leonard Bosack & Sandy Lerner",
    ceo: "Chuck Robbins",
    website: "https://www.cisco.com/"
  },

  dell: {
    id: "15",
    company: "Dell",
    "founder(s)": "Michael Dell",
    ceo: "Michael Dell",
    website: "https://www.dell.com/en-gh/lp"
  },

  dropboxi: {
    id: "16",
    company: " Dropboxi",
    "founder(s)": "Drew Houston & Arash Ferdowsi",
    ceo: "Drew Houston",
    website: "https://www.acer.com/us-en/"
  },

  dyson: {
    id: "17",
    company: " Dyson",
    "founder(s)": "James Dyson",
    ceo: "Roland Krueger",
    website: "https://www.acer.com/us-en/"
  },

  eBay: {
    id: "18",
    company: "eBay",
    "founder(s)": "Pierre Omidyar",
    ceo: "Jamie Iannone",
    website: "https://www.acer.com/us-en/"
  },

  facebook: {
    id: "19",
    company: "Facebook",
    "founder(s)":"Mark Zuckerberg, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz & Chris Hughes",
    ceo: "Mark Zuckerberg",
    website: "https://www.acer.com/us-en/"
  },

  foxconn: {
    id: "20",
    company: "Foxconn",
    "founder(s)": "Terry Gou",
    ceo: "Young Liu (Chairman and President)",
    website: "https://www.acer.com/us-en/"
  },

  fujitsu: {
    id: "21",
    company: "Fujitsu",
    "founder(s)": "(Started as a division of Fuji)",
    ceo: "Masami Yamamoto (Chairman)",
    website: "https://www.acer.com/us-en/"
  },

  google: {
    id: "22",
    company: "Google(Alphabet)",
    "founder(s)": "Larry Page & Sergey Brin",
    ceo: "Sundar Pichai",
    website: "https://www.acer.com/us-en/"
  },

  hive: {
    id: "23",
    company: "Hive",
    "founder(s)": "(Started as a division of Centrica)",
    ceo: "unknown",
    website: "https://www.acer.com/us-en/"
  },

  honor: {
    id: "24",
    company: "Honor",
    "founder(s)": "Ren Zhengfei",
    ceo: "unknown",
    website: "https://www.acer.com/us-en/"
  },

  hp: {
    id: "23",
    company: "HP",
    "founder(s)": "Bill Hewlett & David Packard",
    ceo: "Enrique Lores",
    website: "https://www.hp.com/us-en/home.html"
  },

  huawei: {
    id: "26",
    company: "Huawei",
    "founder(s)": "Ren Zhengfei",
    ceo: "Ren Zhengfei",
    website: "https://www.huawei.com/en/?ic_medium=direct&ic_source=surlent"
  },

  ibm: {
    id: "27",
    company: "IBM",
    "founder(s)": "Charles Ranlett Flint",
    ceo: "Arvind Krishna",
    website: "https://www.ibm.com/us-en"
  },

  "instagram ": {
    id: "28",
    company: "Instagram ",
    "founder(s)": "Kevin Systrom & Mike Krieger",
    ceo: "unknown",
    website: ""
  },

  intel: {
    id: "29",
    company: "Intel",
    "founder(s)": "Gordon Moore & Robert Noyce",
    ceo: "Pat Gelsinger",
    website: "https://www.intel.com/content/www/us/en/homepage.html"
  },

  kaspersky: {
    id: "30",
    company: "Kaspersky",
    "founder(s)":
      "Eugene Kaspersky, Natalya Kaspersky, Alexey De-Monderik & Vadim Bogdanov",
    ceo: "Eugene Kaspersky",
    website: "https://www.kaspersky.co.za/"
  },

  lenovo: {
    id: "31",
    company: "Lenovo",
    "founder(s)": "Liu Chuanzhi",
    ceo: "Yang Yuanqing",
    website: "https://www.lenovo.com/gh/en/"
  },

  lg: {
    id: "32",
    company: "LG",
    "founder(s)": "Koo In-hwoi",
    ceo: "Koo Kwang-mo",
    website: "https://www.lg.com/common/index"
  },

  logitech: {
    id: "33",
    company: "Logitech",
    "founder(s)": "Daniel Borel, Pierluigi Zappacosta & Giacomo Marini",
    ceo: "Bracken Darrell",
    website: "https://www.logitech.com/"
  },

  mcafee: {
    id: "34",
    company: "McAfee",
    "founder(s)": "John McAfee",
    ceo: "Peter Leav",
    website: "https://www.mcafee.com/"
  },

  microsoft: {
    id: "35",
    company: "Microsoft",
    "founder(s)": "Bill Gates & Paul Allen",
    ceo: "Satya Nadella",
    website: "https://www.microsoft.com/en-us/"
  },

  nest: {
    id: "36",
    company: "Nest (Google)",
    "founder(s)": "Tony Fadell & Matt Rogers",
    ceo: "unknown",
    website: "https://store.google.com/"
  },

  netgear: {
    id: "37",
    company: "Netgear",
    "founder(s)": "Patrick Lo",
    ceo: "Patrick Lo",
    website: "https://www.netgear.com/"
  },

  nintendo: {
    id: "38",
    company: "Nintendo",
    "founder(s)": "Fusajiro Yamauchi",
    ceo: "Shuntaro Furukawa (President)",
    website: "https://www.nintendo.com/us/"
  },

  nokia: {
    id: "39",
    company: "Nokia",
    "founder(s)": "Fredrik Idestam, Leo Mechelin & Eduard Polón",
    ceo: "Pekka Lundmark",
    website: "https://www.nokia.com/"
  },

  nvidia: {
    id: "40",
    company: "Nvidia",
    "founder(s)": "Jensen Huang, Curtis Priem & Chris Malachowsky",
    ceo: "Jensen Huang",
    website: "https://www.nvidia.com/location-selector/"
  },

  oneplus: {
    id: "41",
    company: "OnePlus",
    "founder(s)": "Carl Pei & Pete Lau",
    ceo: "Pete Lau",
    website: "https://www.oneplus.com/us"
  },

  oppo: {
    id: "42",
    company: "Oppo",
    "founder(s)": "Tony Chen",
    ceo: "Tony Chen",
    website: "https://www.oppo.com/en/"
  },

  oracle: {
    id: "43",
    company: "Oracle",
    "founder(s)": "Larry Ellison, Bob Miner & Ed Oates",
    ceo: "Safra Catz",
    website: "https://www.acer.com/us-en/"
  },

  paypal: {
    id: "44",
    company: "PayPal (eBay)",
    "founder(s)":
      "Ken Howery, Luke Nosek, Max Levchin, Peter Thiel, Yu Pan & Elon Musk",
    ceo: "unknown",
    website: "https://www.paypal.com/gh/home"
  },

  philips: {
    id: "45",
    company: "Philips",
    "founder(s)": "Gerard Philips & Anton Philips",
    ceo: "Frans van Houten",
    website: "https://www.philips.com.gh/"
  },

  ring: {
    id: "46",
    company: "Ring (Amazon)",
    "founder(s)": "Jamie Siminoff",
    ceo: "",
    website:
      "https://www.amazon.com/stores/Ring/Ring/page/77B53039-540E-4816-BABB-49AA21285FCF"
  },

  salesforce: {
    id: "47",
    company: "Salesforce",
    "founder(s)":
      "Marc Benioff, Parker Harris, Dave Moellenhoff & Frank Dominguez",
    ceo: "Marc Benioff",
    website: "https://www.salesforce.com/"
  },

  samsung: {
    id: "48",
    company: "Samsung",
    "founder(s)": "Lee Byung-chul",
    ceo: "Lee Jae-yong (President)",
    website: "https://www.samsung.com/africa_en/"
  },

  shopify: {
    id: "49",
    company: "Shopify",
    "founder(s)": "Tobias Lütke, Daniel Weinand & Scott Lake",
    ceo: "Tobias Lütke",
    website: "https://www.shopify.com/"
  },

  softbank: {
    id: "50",
    company: " Softbank",
    "founder(s)": "Masayoshi Son",
    ceo: "Masayoshi Son",
    website: "https://group.softbank/en/philosophy"
  },

  sony: {
    id: "51",
    company: "Sony",
    "founder(s)": "Masaru Ibuka & Akio Morita",
    ceo: "Kenichiro Yoshida",
    website: "https://www.sony.com/en/"
  },

  spotify: {
    id: "52",
    company: "Spotify",
    "founder(s)": "Daniel Ek & Martin Lorentzon",
    ceo: "Daniel Ek",
    website:
      "https://open.spotify.com/__noul__?pfhp=2c2ccb58-8a92-4713-a1c0-8b43b3090b49"
  },

  squarespace: {
    id: "53",
    company: "Squarespace",
    "founder(s)": "Anthony Casalena",
    ceo: "Anthony Casalena",
    website: "https://www.squarespace.com/"
  },

  tencent: {
    id: "54",
    company: "Tencent",
    "founder(s)":
      "Ma Huateng, Zhang Zhidong, Xu Chenye, Chen Yidan & Zeng Liqing",
    ceo: "Ma Huateng",
    website: "https://www.tencent.com/en-us/"
  },

  tesla: {
    id: "55",
    company: "Tesla",
    "founder(s)": "Martin Eberhard & Marc Tarpenning",
    ceo: "Elon Musk",
    website: "https://www.tesla.com/"
  },

  texasinstruments: {
    id: "56",
    company: "Texas instruments",
    "founder(s)":
      "Cecil H. Green, J. Erik Jonsson, Eugene McDermott & Patrick E. Haggerty",
    ceo: "Rich Templeton",
    website: "https://www.ti.com/"
  },
  tplink: {
    id: "57",
    company: "TP-Link",
    "founder(s)": "David Karp",
    ceo: "unknown",
    website: "https://www.tp-link.com/en/"
  },

  tumblr: {
    id: "58",
    company: "Tumblr (Automattic)",
    "founder(s)": "David Karp",
    ceo: "unknown",
    website: "https://automattic.com/"
  },

  twitter: {
    id: "59",
    company: "Twitter",
    "founder(s)": "Jack Dorsey, Noah Glass, Biz Stone & Evan Williams",
    ceo: "Elon Musk",
    website: "https://twitter.com/home"
  },

  vodafone: {
    id: "60",
    company: " Vodafone",
    "founder(s)": "Ernest Harrison & Gerry Whent",
    ceo: "Nick Read",
    website: "https://www.vodafone.com/"
  },

  wix: {
    id: "61",
    company: " Wix",
    "founder(s)": "Avishai Abrahami, Nadav Abrahami & Giora Kaplan",
    ceo: "Avishai Abrahami",
    website: "https://www.wix.com/"
  },

  qualcomm: {
    id: "62",
    company: " Qualcomm",
    "founder(s)": "Irwin Jacobs & Andrew Viterbi",
    ceo: "Cristiano Amon",
    website: "https://www.qualcomm.com/"
  },

  wordpress: {
    id: "63",
    company: "WordPress.com (Automattic)",
    "founder(s)": "Matt Mullenweg",
    ceo: "unknown",
    website: "https://wordpress.com/"
  },

  yahoo: {
    id: "64",
    company: "Yahoo (Verizon Media)",
    "founder(s)": "Jerry Yang & David Filo",
    ceo: "unknown",
    website: "https://www.yahoo.com/?guccounter=1"
  },

  youtube: {
    id: "65",
    company: "YouTube (Google)",
    "founder(s)": "Chad Hurley, Steve Chen & Jawed Karim",
    ceo: "unknown",
    website: "https://youtube.com/"
  },

  zoom: {
    id: "66",
    company: "Zoom",
    "founder(s)": "Eric Yuan",
    ceo: "Eric Yuan",
    website: "https://zoom.us/"
  },

  unknown: {
    id: "0",
    company: "unknown",
    "founder(s)": "unknown",
    ceo: "unknown",
    website: "unknown"
  }
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:brand", (request, response) => {
  const techCompanyName = request.params.brand.toLowerCase();
  console.log(techCompanyName);
  if (techCompaniesData[techCompanyName]) {
    response.json(techCompaniesData[techCompanyName]);
  } else {
    response.json(techCompaniesData["unknown"]);
  }
});

app.get("/api", (request, response) => {
  response.json(techCompaniesData);
});

app.listen(herokuPort || PORT, () => {
  console.log(`Server is running on PORT ${PORT}, better go catch it`);
});
