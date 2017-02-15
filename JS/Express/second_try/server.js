var express = require("express");
var path = require('path');
var bp = require('body-parser');
var port = 8000;
var app = express();

app.use(bp.urlencoded)
app.use(express.static(path.join(__dirname,"/static")))
app.set("views",path.join(__dirname,"/views"))
app.set('views engine','views');

require('./server/config/mongoose.js');
require('./server/config/route.js')(app);

app.listen('')
