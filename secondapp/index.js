const express = require("express");
const app = express();
const path = require("path");
const subredditData = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/rand", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  res.render("random", { randomNumber });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = subredditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data }); // spreading will let the view access each prop inside individually
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
  res.render("cats", { cats });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});