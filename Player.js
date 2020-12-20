class Player{
    constructor(){
    }
    //reads the playerCount value from the database
    getCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount = data.val();
        })
    }
    //writes the playerCount value to the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }
    //writes the player name to the database
    updateInfo(name){
        database.ref("player" + playerCount).update({
            name: name
        })
    }
}