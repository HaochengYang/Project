
var mongoose = require("mongoose");
var fs = require('fs');
var path = require('path');
module.path = path.join(__dirname,"../models/");
mongoose.connect('mongodb://localhost/mydb');
fs.readsync(models.path).forEach(function(file){
  require(models.path+'/'+file);
});
