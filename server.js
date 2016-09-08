require('dotenv').config();
var express = require('express');
var index = require('./routes/index.js');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use('/', index);

var server = app.listen(process.env.PORT, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
})

module.exports = server;
