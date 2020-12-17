//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Math","English","Front-end"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  res.render('list', {
    kindOfDay: date.getDay(),
    addListItem: items
  });
});

app.post("/",function(req, res){
  let item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
