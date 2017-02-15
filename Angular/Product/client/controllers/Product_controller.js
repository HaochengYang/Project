app.controller('Product_controller',[$scope,'Product_factory', function($scope,Product_factory){
  $scope.products=[];
  Product_factory.create( function(newProduct){
    $scope.products =newProduct;
  })
}])
