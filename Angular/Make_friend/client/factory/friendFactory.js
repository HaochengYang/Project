app.factory('friendFactory',function($http,$location){
  var factory = {};
  factory.show() = function(cb){
    $http.get('/friend/show').then(function(value){
      cb(value.data)
    })
  }
  factory.create = function(friend){
    $http.post('/friend/new',friend).then(function(value){
      if(value.data){
        $location.url('/')
      }
    })
  }
  factory.delete = function(id){
    $http.get('/friend/delete',id)    
    )
  }
  return factory;
})
