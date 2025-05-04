var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

var inner1 = "images/dice"+randomNumber1+".png"
var inner2 = "images/dice"+randomNumber2+".png"

var image1 = document.querySelector(".dice .img1")
var image2 = document.querySelector(".dice .img2")

image1.setAttribute("src", inner1)
image2.setAttribute("src", inner2)

console.log(randomNumber1)
console.log(randomNumber2)

var newH1 = ""

if (randomNumber1 == randomNumber2) {
    newH1 = "Draw"
}

if (randomNumber1 > randomNumber2) {
    newH1 = "🚩 Player 1 Wins"
}

if (randomNumber1 < randomNumber2) {
    newH1 = "Player 2 Wins🚩"
}

document.querySelector("h1").textContent = newH1