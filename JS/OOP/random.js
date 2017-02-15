  var chars = "0123456789ABCDEFGHIJKRMNOPQRSTUVWSYZ";
  function createVin(){
    var vin = '';
    for(var i =0; i < 17; i++){
      vin += chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }

  createVin();
