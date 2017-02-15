function personConstructor(name){
   var person ={
     name:"Haocheng",
  distance:"10 miles",
  say_name:function(){
    console.log(person.name);
  },
  say_something:function(value1){
    if(value1 === "I am cool"){
      console.log(person.name);
    }
  },
  walk:function(){
   console.log(person.name);
   person.distance += 3;
   return person;
 },
 running:function(){
  console.log(person.name);
  person.distance += 10;
  return person;
},
crawl:function(){
 console.log(person.name);
 person.distance += 1;
 return person;
}
   }
   return person;
}
