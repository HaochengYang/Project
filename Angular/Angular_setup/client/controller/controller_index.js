app.controller('controller_index', function($scope) {
    $scope.cats = "WhiteCat"
    $scope.new_cat  = "haocheng"
    $scope.add = function(){
    $scope.cats.push($scope.new_cat)
    $scope.cats = ''
    }
    $scope.delete = function(idx){
      $scope.cats.splice(idx,1)
    }
    $scope.update =function(idx, name){
      $scope.cats[idx] = name;
      $scope.updatecat = ''
    }

});
