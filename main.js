var score = document.getElementById("score");
var startBtn = document.getElementById("startBtn");
var timer = document.getElementById("timer");
var vision = document.getElementById("vision");
var chessboard = document.getElementById("chessboard");
var wrongAnsDiv = document.getElementById("wrongAns");
var wrongAnsLi = document.querySelector(".wrongAns li");
var popWorng = document.getElementById("popWorngheading");


function startGame() {
  // arr of positons
  let chars = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let nums = [1, 2, 3, 4, 5, 6, 7, 8];

  // random number from 1 to 8
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var randomVision = `${chars[getRandomInt(7)]}${nums[getRandomInt(7)]}`;
  vision.innerHTML = `${randomVision}`;

  // 30 second timer
  let counter = 1;
  let points = 0;
  let wrongAns = [];

  vision.style.backgroundColor = "white";
  vision.style.color = "black";
  function handler(event) {
    if (randomVision === event.target.id) {
      points++;
      score.innerHTML = `${points}`;
      // vision.style.color = "green";

      wrongAns.push(randomVision);
      // Create an "li" node:
      var node = document.createElement("li");
      node.style.backgroundColor = "#85a94e";
      for (i = 0; i < wrongAns.length; i++) {
        // Create a text node:
        var textnode = document.createTextNode(wrongAns[i]);
       }
      
       
      // Append the text node to the "li" node:
      node.appendChild(textnode);
      // Append the "li" node to the list:
      document.getElementById("wrongAns").appendChild(node);
      popWorng.innerHTML = randomVision;
     
      randomVision = `${chars[getRandomInt(7)]}${nums[getRandomInt(7)]}`;
      vision.innerHTML = `${randomVision}`;
      // wrongAnsLi.style.backgroundColor = "green !important";
    } else {
      points--;
      score.innerHTML = `${points}`;
      // vision.style.color = "red";

      

      wrongAns.push(randomVision);
      // Create an "li" node:
      var node = document.createElement("li");

      for (i = 0; i < wrongAns.length; i++) {
        // Create a text node:
        var textnode = document.createTextNode(wrongAns[i]);
       }

      // Append the text node to the "li" node:
      node.appendChild(textnode);
      // Append the "li" node to the list:
      document.getElementById("wrongAns").appendChild(node);
      popWorng.innerHTML = randomVision;

      randomVision = `${chars[getRandomInt(7)]}${nums[getRandomInt(7)]}`;
      vision.innerHTML = `${randomVision}`;
    }
  }

  chessboard.addEventListener("click", handler);

  let timerCount = setInterval(() => {
    timer.innerHTML = ` 0:${counter}`;

    counter++;

    if (counter > 30) {
      clearInterval(timerCount);
      chessboard.removeEventListener("click", handler);
      vision.style.backgroundColor = "#85a94e";
      vision.style.color = "white";
      vision.innerHTML = "Vision";
      points = 0;
      score.innerHTML = `${points}`;
      wrongAns = [];
      document.getElementById("wrongAns").remove;

    }
  }, 1000);
}
