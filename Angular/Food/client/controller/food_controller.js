app.controller('food_controller',function($scope){
    $scope.foods = ["pizza"];
    $scope.create = function(){
      $scope.foods.push($scope.favorite_food);
      $scope.favorite_food ="";
    }
})
