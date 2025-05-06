
var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "yellow", "green"];
var randomNumber;
var randomChoosenColor = buttonColors[randomNumber];
var level = 0;



function nextSequence() {
    randomNumber = Math.floor(Math.random()*4);
    $("#level-title").text("level " + level);
    level+=1;

}

$(document).keypress(function () {
    nextSequence();
    $("#level-title").text("level " + level);
});


$(".btn").click(function (event) {
    var self = $(this);
    var id = self.attr("id");
    playSound(id);
    animatePress(id);

    userClickedPattern.push(id);
    gamePattern.push(randomChoosenColor);

    

    console.log("Clicked Pattern: ", userClickedPattern);
    console.log("Game Pattern: ", gamePattern);
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