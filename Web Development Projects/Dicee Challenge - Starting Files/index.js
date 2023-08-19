var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImage2 = "dice" + randomNumber2 + ".png";
var sourceImage = "./images/" + randomImage;
var sourceImage2 = "./images/" + randomImage2;
console.log(sourceImage);
var image1 = document.querySelectorAll("img")[0];
console.log(image1);
image1.setAttribute("src", sourceImage);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", sourceImage2);

if (randomNumber1 === randomImage2) {
  document.querySelector("h1").innerHTML = "Draw!!!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 wins!";
}
