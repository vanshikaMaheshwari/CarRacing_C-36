var gameState = 0;
var player, form, game, playerCount
var database;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState()
    game.start();
}

function draw(){



}
