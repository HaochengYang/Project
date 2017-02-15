var mongoose = require('mongoose');
var user = mongoose.model('user');
var bucket =mongoose.model('bucket');


module.exports = (function(){
  return{
    add:function(req,res){
      var bucket = new bucket({title:req.body.title, description:req.body.description, _user:req.body._id})
      bucket.save(function(err, data){
        user.findOne({_id: req.body.id}, function(err,user){
          console.log(user);
          user._buckets.push(data._id);
          user.save(function(err,userDate){
            res.json(data)
          })
        })
      })
    }
    getall:function(req, res){
      bucket.find({})
      .populate('_user')
      .populate({
          path:'_user',
          model:'user'
        }
      })
      .exec(function(err,buckets){
        res.json(buckets)
      })
    }
  }
})()
