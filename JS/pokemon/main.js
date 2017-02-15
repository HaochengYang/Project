var game = {
  players: [],
  addPlayer: function(){}
};

function playerConstructor(name){
  player = {};
  player.name = name;
  player.card = null;
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};
