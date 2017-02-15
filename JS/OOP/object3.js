function constructor(name,wheels,passengers,speed){
        var chars = "0123456789ABCDEFGHIJKRMNOPQRSTUVWSYZ";
        this.name = name||"transportantion";
        this.wheels = wheels|| 1;
        this.passengers = passengers || 0;
        this.speed = speed || 20;
        this.distance_travelled = 0;
        this.vin = createVin();
        function createVin(){
          var vin = '';
          for(var i =0; i < 17; i++){
            vin += chars[Math.floor(Math.random()*35)];
          }
          return vin;
        }
}

constructor.prototype.makeNoise = function(){
  console.log("I am here");
  return this;
};

constructor.prototype.updateDistanceTravelled = function(){
  distance_travelled += this.speed;
  return this;
};

constructor.prototype.move = function(){
  this.updateDistanceTravelled();
  this.makeNoise();
  return this;
};

constructor.prototype.checkMiles = function(){
  console.log(this.distance_travelled);
  return this;
};
