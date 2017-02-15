var express = require('express');
var path = require('path');
var bp =require('body-parser');
var port = 8000;
var app = express();
//
app.use(express.static(path.join(__dirname,'./client')));
app.use(bp.json());
//
require('./server/config/mongoose.js');
require('./server/config/route.js')(app);
//
app.listen(port,function(){
  console.log('Liseten on localhost 8000')
})
