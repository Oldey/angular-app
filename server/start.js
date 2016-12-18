var express = require('express');
var morgan = require('morgan');
var app = express();
var bodyParser = require("body-parser");
var fs = require('fs');
app.use(express.static('./app')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
var dataOne = require('./dataOne');
var dataTwo = require('./dataTwo');

app.get('/getData', function (req, res) {
  res.send(dataOne)
});

app.get('/getDataTwo', function (req, res) {
  res.send(dataTwo)
});

function isDataValid(obj) {
  var err = [false, false, false, false];
  if (!obj.name || obj.name.length > 25)
    err[0] = true; // name error
  if (!obj.url || obj.url.indexOf("http://") != 0)
    err[1] = true; // url error
  if (!obj.type || obj.type != 1 && obj.type != 2)
    err[2] = true; // type error
  if (!obj.cost || isNaN(parseFloat(obj.cost)) || !isFinite(obj.cost))
    err[3] = true; // cost error
  return err;
}

app.post("/postData", function (req, res) {
  var err = isDataValid(req.body);
  //console.log("req.body",req.body,"err",err);
  if (!(err[0] || err[1] || err[2] || err[3])) {
    dataTwo.push(req.body);
    fs.writeFile('./server/dataTwo.json', JSON.stringify(dataTwo));
    res.status(200).send(dataTwo);
  }
  else {
    res.status(500).send(err);
  }
         
 });
app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
});

