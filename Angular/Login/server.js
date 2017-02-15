var express = require('express');
var path = require('path');
var app =express();
var bp = require('body-parser');
var session = require('express-session');
var port = 8000;
//
app.use(session({
  secret:'User registration',
  resave: true,
  saveUninitialized: true,
  cookie:{secure:false}
}));
app.use(express.static(path.join(__dirname,'/client')));
app.use(bp.json());
//
require('./server/config/mongoose.js')
require('./server/config/route.js')(app)
//
app.listen(port, function(){
  console.log(`listen on port ${port}`)
})
