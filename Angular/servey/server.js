var express = require('express');
var path = require('path');
var bp = require('body-parser');
var port = 8000;
var app = express();
//
app.use(bp.urlencoded());
app.use(express.static(path.join(__dirname, './static')));
app.set(path.join(__dirname, './views'));
app.set('view engine','ejs');
//
var server = app.listen(port, function(){
  console.log(`App listen on Port ${port}`);
})
//
var route = require('./server/config/routes.js')(app, server)
