var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');
var pg = require('pg');
var AWS = require("aws-sdk");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


router(app);

console.log ('Salio')
app.listen(8080, () => {
  console.log('Express listening on port:', 8080);
})
