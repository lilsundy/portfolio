var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use('/', express.static('public'));

app.get('/resume', function(req, res) {
  res.sendFile(__dirname + '/public/resume/halinaSundyResume.pdf');
});

app.get('*', function(req, res) {
  res.sendFile('/index.html');
});

app.listen(PORT, function() {
  console.log('Listening on port %s', PORT);
});