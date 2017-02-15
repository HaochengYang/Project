var myoop = {
  name:"Haocheng",
  age:16,
  sayname:function(){console.log(myoop.name)}
}
myoop.sayname();


function Newperson(name){
  return {
    name:name,
    sayname:function(){
      console.log(name);
    }
  }
}

var Tom = Newperson("tom");
var Haocheng = Newperson("haocheng");
Tom.sayname();
Haocheng.sayname();


function person(name){
  this.name = name,
  this.sayname = function(){console.log(name);}
}

var jay = new person("jay");
jay.sayname();
