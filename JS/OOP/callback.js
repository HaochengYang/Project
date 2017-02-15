function printOut(){
  console.log("I just want print out something");
}

function trySomeNew(new_passing){
  new_passing();
}

trySomeNew(printOut);

/*
function invokePrintOut(callback){
  var timeShow = setInterval(function(){callback();}, 4000)
}

invokePrintOut(printOut);
invokePrintOut(function newPrintOut(){
 console.log("I love this");
});
*/
