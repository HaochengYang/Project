var express = require('express');
var path = require('path');
var bp = require('body-parser');
var port = 8000;
var session = require('express-session');
var app = express()
//
app.use(session({
  secret:'keybored kat',
  resave:true,
  saveUnitialzed:false,
  cookie:{secure:false}
}))
app.use(bp.jason())
app.use(express.static(path.join(__dirname, './client')));
//
require('./server/config/mongoose.js')
require('./server/config/route.js')(app)
//
app.listen(port,function(){
  console.log('listen on localhost:${port}');
})
