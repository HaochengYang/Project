function dec_constructor(card){
  //public property
  this.card = card;
  //public method;
  this.shuffle = function(){};
  this.reset = function(){};
  this.deal =function(){};
}

function player_constructor(name,hand){
  //public property
  this.name =name;
  this.hand = hand;
  //public method;
  this.take_card = function(dec_constructor){
    dec_constructor.deal();
  }
  this.discard =function(){}
}
