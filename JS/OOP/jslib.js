var _ = {
   function find(arr, x){
     var x = x;
    for(var i= 0; i <arr.length; i++){
      if(arr[i] == x){
        return true;
      }
    }
    return "The value you are looking for is not here"
   },
   function remove(arr,x){
     arr.splice(x,1);
     return arr;
   },
   function map(){

   },
   function filter(){

   },
   function reject(){

   },
}


var events = -.remove([2,3,4,5,6,7],3)
console.log(events);
