
var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "yellow", "green"];
var randomNumber;
var randomChoosenColor = buttonColors[randomNumber];
var level = 0;

$(document).keypress(function (e) {
    if (e.key === " ") {
        nextSequence();
        $("#level-title").text("level " + level);
    }
});

function nextSequence() {
    randomNumber = Math.floor(Math.random()*4);
    randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    setTimeout(() => {
        animateGamePress(randomChoosenColor);        
    }, 500);

    console.log("Game Pattern: ", gamePattern);
    $("#level-title").text("level " + level);

    level+=1;

}




    $(".btn").click(function (event) {
        var self = $(this);
        var id = self.attr("id");
        playSound(id);
        animatePress(id);
        userClickedPattern.push(id);
        checkAnswer()
        console.log("Clicked Pattern: ", userClickedPattern);
    });




function playSound(sound) {
    var audio = new Audio('sounds/'+sound+'.mp3');
    audio.play();
}

function animatePress(currentColour) {
    $("."+currentColour).addClass("pressed");
    setTimeout(function () {
        $("."+currentColour).removeClass("pressed");

    }, 100);
}

function animateGamePress(currentColour) {
    $("."+currentColour).addClass("game");
    setTimeout(function () {
        $("."+currentColour).removeClass("game");

    }, 100);
}

function wrongAnswer() {
    console.log("wrong pattern. Game over!");
    $("#level-title").text("❌ Wrong Patter!\n Game Over!")
}

function checkAnswer() {
    for (var i = 0; i < userClickedPattern.length; i++) {
        if (gamePattern[i] !== userClickedPattern[i]) {
            wrongAnswer();
            return;
        }
    }
    

    if (userClickedPattern.length === gamePattern.length) {
        userClickedPattern = [];
        nextSequence();
    }
    
}
