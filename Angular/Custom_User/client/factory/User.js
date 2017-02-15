app.factory('User_factory',[function(){
    var factory ={};
    var Users =[
      {first_name:'Haohceng', last_name:'Yang',age:'23',language:"Python"},
      {first_name:'Kewei', last_name:'Liu',age:'22',language:"None"}
    ];
    factory.index = function(callback){
      callback(Users);
    }
    factory.create = function(user){
      Users.push(user);
    }
    factory.delete = function($index){
      Users.splice($index,1);
    }
    return factory;
}])
