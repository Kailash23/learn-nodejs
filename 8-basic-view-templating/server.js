const express = require("express");
const favicon = require("serve-favicon");

const app = express();
const staticAssets = "./public"; //__dirname alternative
// const staticAssets = __dirname + "/public"; 
const faviconPath = __dirname + "/public/favicon.ico";
// const faviconPath = "./public/favicon.ico";

app
    .set("views", "./views")
    .set("view engine", "hjs")
    .use(express.static(staticAssets))
    .use(favicon(faviconPath))
    .get("/", (req, res) => {

        // Templating engine
        var title = "another title";

        var tweets = [
            "my first tweet",
            "other tweet",
            "yet another tweet"
        ];

        // var tweetHTML = tweets.reduce((html, tweet) => `${html}<li>${tweet}</li>`,"");

        res.render("index", {
            title: title,
            tweets: tweets,
            showTweets: true,
            partials: { header: "header", tweets: "tweets" }
        })
    })
    .get("/api/profile", (req, res) => {
        var profile = { name: "Jordan" };
        res.send(profile);
    });

app.listen(3000);