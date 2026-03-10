const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

let letters = [];

//first page
app.get("/", (req, res) => {
  res.render("index");
});

//receive name & show message page
app.post("/name", (req, res) => {
  const name = req.body.name;
  res.render("message", { name });
});

//after message is sent
app.post("/message", (req, res) => {
  const { name, message } = req.body;

  letters.unshift({
    name,
    message,
  });

  res.redirect("/letters");
});

//final page (displaying letters)
app.get("/letters", (req, res) => {
  res.render("letters", { allLetters: letters });
});

app.listen(5001, () => {
  console.log("server is running on 5001");
});
