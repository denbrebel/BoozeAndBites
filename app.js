
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home")
});

app.get("/recepten", function(req, res) {
  res.render("recepten")
});

app.get("/wijnengin", function(req, res) {
  res.render("wijnengin")
});

app.get("/restaurants", function(req, res) {
  res.render("restaurants")
});






app.listen(3000, function() {
  console.log("Server started on port 3000");
});
