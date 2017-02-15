var express = require('express');
var path = require('path');
var bp = require('body-parser');
var port = 8000;
var app = express();
//
app.use(bp.json());
app.use(express.static(path.join(__dirname + '/client')));
//
require('./server/config/mongoose.js');
require('./server/config/route.js')(app);
//
app.listen(port, function(){
  console.log("App listen on port 8000");
})
