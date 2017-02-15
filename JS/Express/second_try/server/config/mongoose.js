var mongoose =require('mongoose');
var fs = require('fs');
var path = require('path');

var models_path = path.join(__dirname, "./../models");
mongoose.connect('mongoose://localhost/user')

fs.readdirsync(models_path).foreach(functin(file){
  if(file.indexof)
})
