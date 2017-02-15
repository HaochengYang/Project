app.factory('questionFactory',function($http){
    var factory = {};
    factory.submit = function(question){
      console.log(question)
      $http.post('/submit',question).then(function(output){
  			if(output.data){
  				$location.url('/home')
  			}
  		})
    }
    return factory;
})
