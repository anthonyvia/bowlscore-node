var express = require('express');
var subapp = express();

/**
 * JSON API
 */

subapp.get('/score', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  return res
    .status('200')
    .send(JSON.stringify({score: 0}));
});

module.exports = subapp;
