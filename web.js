var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
buff = fs.readFileSync('index.html');
mystring = buff.toString();

app.get('/', function(request, response) {
  response.send(mystring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});