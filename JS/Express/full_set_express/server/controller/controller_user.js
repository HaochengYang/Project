var mongoose = require("mongoose");
var user = mongoose.model('user')
module.exports = (function(){
  return {
    index:function(req,res){
         user.find({},function(error, user){

         })
    },
    remove:function(req,res){
         user.remove({},function(error, user){

         })
    },
    new:function(req,res){
         user.new({},function(error, user){

         })
    },
    create:function(req,res){
         user.create({},function(error, user){

         })
    },
    update:function(req,res){
         user.update({},function(error, user){

         })
    },
    save:function(req,res){
         user.save({},function(error, user){

         })
    },
  }
})()
