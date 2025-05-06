
var gamePattern = [];
var userClickedPattern = [];

var buttonColors = ["red", "blue", "yellow", "green"];

var randomNumber = nextSequence();

var randomChoosenColor = buttonColors[randomNumber];

gamePattern.push(randomChoosenColor);


function nextSequence() {
    return Math.floor(Math.random()*4);
}
// console.log(gamePattern);

$(".btn").click(function (event) {
    var self = $(this);
    var id = self.attr("id");
   playSound(id)
    userClickedPattern.push(id)
    self.addClass("pressed");
    setTimeout(function () {
        self.removeClass("pressed");

    }, 100);

    console.log("Clicked Pattern: ", userClickedPattern);
    // console.log("Game Pattern: ", gamePattern);
});

function playSound(sound) {
    var audio = new Audio('sounds/'+sound+'.mp3');
    audio.play();
}

