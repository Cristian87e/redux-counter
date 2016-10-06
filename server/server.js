var express = require('express');
var fs = require('fs');

var app = express();
var port = 8082;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/planets', function(req, res) {
  fs.readFile('planets.json', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    res.status(200).json(JSON.parse(data));
  });
  // var planet_id = req.param('id');
  // var name = req.param('name');
  //
  // res.send();
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
