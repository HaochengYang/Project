var sum = function(){
  var sum =0;
  for(var i=0; i<500; i++){
    sum += i;
  }
  console.log(sum);
}
console.log(sum());

var aver = function(arr){
  var sum = 0;
  for(var i=0; i<arr.length; i++){
    sum += i;
  }
  var aver = sum/arr.length;
  return aver;
}
array = [2,5,6,7,8,9,0]
console.log(aver(array));

var min = function(arr){
  min = arr[0];
  for(var i = 1; i <arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    }
    return min;
  }
}
array = [2,5,6,7,8,9,0]
console.log(min(array));


var object1 = {
  min:function(arr){
    min = arr[0];
    for(var i = 1; i <arr.length; i++){
      if(min > arr[i]){
        min = arr[i];
      }
      return min;
    }
  },
  aver:function(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
      sum += i;
    }
    var aver = sum/arr.length;
    return aver;
  },
  sum:function(){
    var sum =0;
    for(var i=0; i<500; i++){
      sum += i;
    }
    console.log(sum);
  }
}
array = [2,4,5,6,7,8,9]
console.log(object1.aver(array));
console.log(object1.min(array));
console.log(object1.sum());

var person ={};
person ={
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

console.log(person);
console.log(person.say_name('Tom'));
console.log(person.say_something('I am cool'));
console.log(person.walk());
console.log(person.running());
console.log(person.crawl());
