app.controller('friendController',function($scope,friendFactory){
  var errors =[];
  friendFactory.show(function(data){
    $scope.friends = data;
  })

  $scope.create = function(){
    var errors =[];
    friendFactory.create($scope.newFriend);
    $scope.newFriend ='';
  }
  $scope.delete = function(id){
    friendFactory.delete(id);
  }

  if(!$scope.newFriend.firstName){
    $scope.errors.push('Please enter your first name')
  } else if(!$scope.newFriend.lastName){
    $scope.errors.push('Please enter your last name')
  }else if(!$scope.newFriend.birthDate){
    $scope.errors.push('Please enter your birthDate')
  }else {
    friendFactory.create($scope.newFriend);
    $scope.newFriend ='';
  }
})
