var mongoose = require('mongoose');
var friend = mongoose.model('friend');

module.exports = (function(){
  return {
    create: function(req,res){
      var friend = new friend(req.body);
      friend.save(function(err,data){
        if(err){
          console.log(err)
      }else {
        res.json(data)
      }
      })
    },
    show: function(req,res){
      friend.find({},function(err,data){
        res.json(data)
      })
    }
  }
})()
