app.controller('userController',function($scope, userFactory,$location){
  userFactory.checkStatus(function(data){
    if(!data){
      $location.url('/login')
    }else{
      $location.curUser = data
    }
  })
  $scope.create = function(){
    $scope.errors = [];
    if(!$scope.new_user || !$scope.new_user.name){
      $scope.errors.push('Please enter a name')
    }else {
      userFactory.create($scope.new_user)
       $scope.new_user ={};
     }
  }
})
