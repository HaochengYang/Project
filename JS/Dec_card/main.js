function dec_constructor(){
  //private property
  var poker =("A",2,3,4,5,6,7,8,9,10,"knight","king","queen","black_jark", "red_jark");
  function shuffle(){
    var card ='';
    for(var i = 0; i <1; i++){
      card += poker(Math.floor(Math.random()*15))
    }
    return card;
  };
  function deal(){
    console.log(Math.floor(Math.random(card)));
  };
  //public method;
  this.reset = function(){};
  this.deal =function(){};
  this.shuffle_dec = function(){
    return shuffle()
  };
  this.deal_dec = function(){
    return deal();
  }
}

function player_constructor(name,hand){
  //public property
  this.name =name;
  this.hand = hand;
  //public method;
  this.take_card = function(dec_constructor){
    take_card.deal();
  }
  this.discard =function(){}
}
