const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
app.use('/', routes);
app.use('/static', express.static('public'));

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

//this caputres all requests must be first and call next
app.use(function(req, res, next) {
  console.log(req.method);
  next();
});

app.use('/special', function(req, res, next) {
  console.log('you reached a special area');
  next();
});

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
