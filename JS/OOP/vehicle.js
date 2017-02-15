function viechcleConstructor(name,wheels,passenger,speed){
  if(!(this new viechcleConstructor)){
    return new viechcleConstructor(name,wheels,passenger,speed);
  }
  //private
  var self = this
  var distance_travel =0;
  //private method
  function updatedistance(){
    distance_travel += self.speed;
  }
  //public method
  this.name= name;
  this.wheels = wheels || 1;
  this.passenger = passenger || 0;
  this.speed = speed || 0;
  this.makeNoise =function(){
    console.log("I am" + this.name + "I have" + this.wheels + "wheels" + "I can take" + this.passenger + "passenger");
  }
  this.move =function(){
    updatedistance();
    this.makeNoise();
  }
  this.checkMiles = function(){
    return distance_travel;
  }
}

var Bike = new viechcleConstructor("Bike",2,1,20);
Bike.makeNoise();
Bike.makeNoise = function(){console.log("ring ring");}
Bike.makeNoise();

var Sedan = new viechcleConstructor("Sedan", 4, 4);
Sedan.makeNoise();
Sedan.makeNoise = function(){console.log("Honk Honk!");}


var Bus = new viechcleConstructor("Bus",10,50);
Bus.makeNoise();
Bus.addpassenger = function(pick){
  Bus.passenger = Bus.passenger + pick;
    console.log(Bus.passenger);
}
