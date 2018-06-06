var express = require("express");
var bodyParser = require("body-parser");
var method = require("method-override");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");



app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });