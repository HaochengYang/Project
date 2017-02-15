app.controller('User_controller',function($scope){
  $scope.Users = [];
  $scope.create_user = function(){
    $scope.Users.push($scope.newUser);
    $scope.newUser ='';
  }
  $scope.delete = function(idx){
    $scope.Users.splice(idx,1);
  }
})
