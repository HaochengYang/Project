var session = require('./../controller/session.js');
var bucket = require('./../controller/session.js');
module.exports = function(app){
  app.post('/login', session.create)
  app.get('/checkStatus', session.checkStatus)
  app.get('/logout',session.logout)
  app.get('/buckets/getall',bucket.getall)
  app.post('/buckets/add',bucket.add)
}
