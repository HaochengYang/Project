// requireing up the modules
var express = require('express');
var path =require('path');
var bp = require('body-parser');
var root = __dirname;
var port = 8000;
var app = express();
//set up modules
app.use(express.static(path.join(root, 'client')));
app.use(bp.json());
app.use(express.static(path.join(root, 'bower_components')));
app.listen(port, function(){
  console.log('listening on $port');
});
