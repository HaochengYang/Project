Product_app.factory('Product_factory', ['$http',function($http){
    var factory = {};
    var Products =[];
    factory.index = function(callback){
      callback(Products);
    }
    factory.create = function(newProduct,callback){
     if(newProduct.price && Number(parseFloat(newProduct.price))==newProduct.price){
       Products.push(Product);
       callback(Products);
     }
    }
    factory.delete = function(idx, callback){
      Products.splice(idx,1);
      callback(Products);
    }
  /*
    factory.update = function(callback){
      callback(Products);
    }
    factory.new = function(callback){
      callback(Products);
    }
    factory.add = function(callback){
      callback(Products);
    }
    factory.show = function(callback){
      callback(Products);
    }
  */
    return factory;
}]);
