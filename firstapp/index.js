const express = require("express");
const app = express();

// app.use((req, res) => {
// 	console.log("got a request");
// });

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("Welcome to the home page!!");
});

app.get("/cats", (req, res) => {
  console.log("cat request");
  res.send("meow");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`this is ${subreddit} subreddit!`);
});

app.get("/dogs", (req, res) => {
  console.log("dog request");
  res.send("woof");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`Search results for ${q}`);
});

app.get("*", (req, res) => {
  res.send("unknown path");
});