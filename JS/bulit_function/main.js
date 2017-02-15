function runningLogger(){
console.log("I am running");
}

function mutiple(num){
  return num*10;
}

function stringReturnOne(){
    return "this is string one";
}

function stringReturnTwo(){
  return "this is string two";
}

function caller(check_function){
  if(typeof check_function ==="function"){
    console.log("oh, you are functiom");
  }
}
caller(function(){console.log("this is greate")});

function myDoubleConsoleLog(check_function1,check_function2){
  if(typeof check_function1 ==="function"){
    console.log(check_function1())
  }
  if(typeof check_function2 ==="function"){
    console.log(check_function2())
    }
}

myDoubleConsoleLog(function hello(){
  console.log("hello kewei")
  return "I am returning";
}, "new");

function caller2(variable){
  console.log("start");
  setTimeout(function(){
    if(typeof variable === "funcation"){variable();}
  }, 2000);
  console.log("ending");
  return "interesting";
}

caller2(myDoubleConsoleLog());


console.log(document.body);
var bod = document.body;
// this is more fun if it's a random page with stuff already on it (like the learning platform for example).
bod.innetHTML = "<h1>Hello World</h1>";
