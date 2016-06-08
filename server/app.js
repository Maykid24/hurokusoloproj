var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 8080, function () {
  console.log('Server is listening');
});

app.get('/', function (req, res) {
  res.writeHead(200);
  res.write('Cannot believe its already three weeks in... OH MY LANTA');
  res.end();
});
