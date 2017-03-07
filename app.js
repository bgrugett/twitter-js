const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

//this caputres all requests must be first and call next
app.use(function(req, res, next) {
  console.log('I just heard', req);
  next();
});

app.get('/', function(req, resp, next) {
  resp.send('Welcome');
});

app.get('/news', function(req, resp, next) {
  resp.send('Welcome to the news');
});
