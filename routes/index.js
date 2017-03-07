const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', function (req, res) {
  res.sendfile('/static/stylesheets/style.css');
});

router.get('/users/:name', function (req, res) {
  let name = req.params.name;
  let list = tweetBank.find( {name: name});
  console.log('name ', name, ' list ', list);
  res.render( 'index', { list } );
});

module.exports = router;
