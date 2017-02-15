app.factory('session_factory', function($http,$location){
  var factory = {};
  factory.create =function(newUser){
    $http.post('/create',newUser).then(function(output){
      if(output.data){
        $location.url('/dashbored');
      }
    })
    factory.checkStatus =function(){
      $http.get('/checkStatus')
    }
  }
  return factory;
})
