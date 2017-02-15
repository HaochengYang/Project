app.controller('questionController',function($scope,questionFactory,$location){
  $scope.submit = function(){
    if(!$scope.question || !$scope.question.question ||!$scope.question.description ){
      alert('question must be enter.')
    }else {
      questionFactory.submit($scope.question)
    }
  }
})
