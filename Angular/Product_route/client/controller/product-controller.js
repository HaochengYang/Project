app.controller('product-controller',['$scope','productFactor',function($scope,productFactory){
           $scope.products =[];
           $scope.add=function(){
             $scope.products.push($scope.newproduct);
             $scope.newproduct='';
           }
            $scope.delete = function(idx){
              $scope.products.splice(idx,1);
            }
            $scope.buy = function(idx){
              $scope.products.quantity -= 1;
            }
}])
