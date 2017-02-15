var friend = require('./../controller/friendController.js');

module.exports =function(app){
  app.post('/friends/new',function(req,res){
    friend.create(req,res);
  })
  app.get('friends/show',function(req,res){
    friend.show(req,res);
  })
  app.get('friend/delete/:id',function(req,res){
    friend.delete(req,res);
  })
}
