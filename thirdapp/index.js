const express = require("express");
const app = express();
const path = require("path");
let comments = require("./commentsdb");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");
uuid();

// Required to tell Express how to deal with incoming data.
app.use(express.urlencoded({ extended: true })); // Parses URL Encoded payloads (Form data)
app.use(express.json()); // Parses JSON payloads

// Middleware to help support HTTP verbs not supported by client for e.g. DELETE, PATCH
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);

  res.render("comments/show", { comment });
});

app.post("/comments/", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ id: uuid(), username, comment });

  // Express Redirect.
  res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);

  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const text = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = text;

  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);

  res.redirect("/comments");
});
app.listen(3000, () => console.log("Listening on PORT 3000"));