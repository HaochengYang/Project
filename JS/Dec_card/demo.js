function Deck(){
  this.cards =[];
  this.create = function(){
    var suits = ['heart','clubs','spades','diamonds'];
    var numbers =[2,3,4,5,6,7,8,9,10,"knight","queen","king"];
    for(number in numbers){
      for(suit in suits){
        var card ={};
        card.number =numbers[number]+' of ' +suits[suit];
        this.cards.push(card)
      }
    }
  }
  this.create();
  this.shuffle = function(){
    for(var i =0; i < this.cards.length; i++){
      var rand = Math.floor(Math.random()*(51-0))+0;
      var temp = this.cards[i];
      this.cards[i] = this.cards[rand];
      this.cards[rand] = temp;
    }
  }
}

function Player(name){
  this.name =name;
  this.hand = [];
}

var mydec = new Deck()
mydec.shuffle();
var player1 = new Player('Haocheng');
player1.hand.push(mydec.cards.pop());
console.log(player1)
