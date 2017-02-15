var express = require("express"),
var path = require("path"),
var bp = require("body-parser"),
var port = 8000,
var app = express();
//_____________________________________________
app.use(express.urlencoded());
app.use(bp.static(path.join(__dirname,"./static")));
app.set(path.join(__dirname,'views'));
app.set('view engine','ejs');
//______________________________________________
require('./server/config/mongoose');
require('./server/config/routes')(app);
//______________________________________________
app.listen(port,function(){
  console.log('listen on localhost:8000/')
})
