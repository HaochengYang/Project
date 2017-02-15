var express = require("express");
var port = 8000;
var path = require("path");
var bp = require("body-parser");
var app = express();
//set up the module with
app.use(express.urlencoded({extened:True}));
app.use(bp.static(path.join(__dirname,'./static')));
app.set(path.join(__dirname,'views'))
app.set('view engine','ejs');
//reuire for the routes and mongoose
require('./server/config/mongoose.js');
require('./server/config/routes.js');
//listen to the port
app.listen(port,function(){
  console.log("check your result at port 8000");
})
