const express = require("express");
const favicon = require("serve-favicon");

const app = express();
const staticAssets = "./public"; //__dirname alternative
// const staticAssets = __dirname + "/public";
const faviconPath = __dirname + "/public/favicon.ico";

app
  .use(express.static(staticAssets))
  .use(favicon(faviconPath))
  .get("/api/profile", (req, res) => {
    var profile = { name: "Jordan" };
    res.send(profile);
  });

app.listen(3000);
