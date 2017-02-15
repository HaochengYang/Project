function Game(consumerprice, name, dealCost, instock){
    var  consumerprice = consumerprice;
    var  dealCost = dealCost;
    var ourGame = {};
    ourGame.name = name;
    ourGame.type = 'bored game';
    ourGame.player = [];
    ourGame.addPlayer = function(player_name){
      ourGame.player.push(player_name);
    }
    ourGame.showPrivateVariables = function(){
      console.log(dealCost);
      console.log(consumerprice);
    }

    function myPrivateFunction(){
      console.log("This is nice to type in");
    }
    myPrivateFunction();
    return ourGame;
}
