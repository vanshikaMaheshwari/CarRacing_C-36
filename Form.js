class Form{
    constructor(){

    }
    display(){
        //dom library
        var title = createElement("h2");
        title.html("CAR RACING GAME");
        title.position(130,0);
        var input = createInput("Enter Your Name");
        input.position(130,160);
        var button = createButton("Play");
        button.position(250,200);
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount++
            player.updateInfo(name)
            player.updateCount(playerCount)
            var greeting = createElement("h3")
            greeting.html("Hi "+name)
            greeting.position(130,160)
        })
    }
}