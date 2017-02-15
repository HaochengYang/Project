function nijiaConstructor(name, age, prevOccupation){
   var nijia ={};
   nijia.name = name;
   nijia.age = age;
   nijia.prevOccupation = prevOccupation;
   nijia.introduce = function(){
     console.log("hi my name is"+nijia.name+"I used to"+nijia.prevOccupation+"and now I am nijia");
   }
   return nijia;
}


var haocheng = nijiaConstructor("haocheng","23", "programmer");
haocheng.introduce();

var tom = nijiaConstructor("Tom", "42","student");
tom.introduce = function(){
  console.log("I am sensei");
}
tom.introduce();
