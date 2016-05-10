var glob = require('glob');
var fs = require('fs');
var morgan = require('morgan');
var express = require('express');
var app = express();

app.use(morgan("dev"));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

var files = glob.sync(__dirname+'/mock/**/*.json');
files.forEach(function(fileName) {
  var endpoint = fileName.replace(__dirname+'/mock', '').replace('.json', '');

  app.get(endpoint, function(req, res) {
    var data = fs.readFileSync(fileName, 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.write(data);
    res.end();
  });
});

app.listen(3002, function() {
  console.log('JIS mock back-end kuulab pordil 3002...');
});
