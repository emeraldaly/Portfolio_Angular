var express = require('express');
var BodyParser = require("body-parser");
var logger = require('morgan');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.static('public'));
app.use(BodyParser.urlencoded({extended: false}));

app.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});

app.listen(PORT, function() {
  console.log("Listening on ", PORT);
});