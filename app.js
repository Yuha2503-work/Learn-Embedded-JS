//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var items = ["Bi'ch Ngo.c","Nha^n Anh","My~ Nha^.t"];

app.get("/", function(req, res) {

  var options = { weekday:'long', month: 'long', day: 'numeric' };
  const today = new Date();

  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {
    kindOfDay: day,
    addListItem: items
  });
});

app.post("/",function(req, res){
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
