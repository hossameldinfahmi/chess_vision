var score = document.getElementById("score");
var startBtn = document.getElementById("startBtn");
var timer = document.getElementById("timer");
var vision = document.getElementById("vision");
var chessboard = document.getElementById("chessboard");
var wrongAnsDiv = document.getElementById("wrongAns");
var wrongAnsLi = document.querySelector(".wrongAns li");
var popWorng = document.getElementById("popWorngheading");
const sgood = new Audio("sounds/good.mp3");
const sbad = new Audio("sounds/bad.mp3");
const loser = new Audio("sounds/loser-end.mp3");
const winer = new Audio("sounds/winer.mp3");
const runout = new Audio("sounds/runout.mp3");
const mid = new Audio("sounds/mid.mp3");




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
      sgood.play();
      points++;
      if (counter > 0) counter=counter-2;
      timer.innerHTML = ` 0:${counter}`;


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
      wrongAnsDiv.appendChild(node);
      popWorng.innerHTML = randomVision;

      randomVision = `${chars[getRandomInt(7)]}${nums[getRandomInt(7)]}`;
      vision.innerHTML = `${randomVision}`;
      // wrongAnsLi.style.backgroundColor = "green !important";

      // display icon in the board

      let img = document.createElement("img");
      img.src = "./3adel.png.png";
      img.style.display = "block";
      img.style.float = "right";
      img.style.width = "60%";
      img.style.padding = "12%";

      event.target.append(img);
      const popUp = setTimeout(removeImg, 500);

      function removeImg() {
        img.remove();
      }
    } else {
      sbad.play();
      points--;
      counter=counter+2;
      timer.innerHTML = ` 0:${counter}`;
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

      // display icon in the board

      let img = document.createElement("img");
      img.src = "./download.jpeg";
      img.style.display = "block";
      img.style.float = "right";
      img.style.width = "60%";
      img.style.padding = "12%";

      event.target.append(img);
      const popUp = setTimeout(removeImg, 500);

      function removeImg() {
        img.remove();
      }
    }
  }

  chessboard.addEventListener("click", handler);

  let timerCount = setInterval(() => {
    timer.innerHTML = ` 0:${counter}`;

    counter++;
    // if (counter > 7 && counter <10) runout.play();


    if (counter > 10) {
      clearInterval(timerCount);

      chessboard.removeEventListener("click", handler);

      vision.style.backgroundColor = "#85a94e";
      vision.style.color = "white";
      vision.innerHTML = "Vision";

      // Score pop up
      let scre = document.createElement("h3");
      scre.style.display = "block";
      scre.style.width = "100%";
      scre.style.position = "absolute";
      scre.style.fontSize = "48px";
      scre.style.textAlign = "center";
      scre.style.top = "50%";
      scre.style.transform = "translateY(-50%)";
      scre.style.margin = "0";
      scre.style.padding = "40px 0";
      scre.style.color = "white";

      if (points <= 0) {
        loser.play();
        scre.append(`SCORE: ${points}? 7ATA EL GAMES MESH NAFE3 FEHA?! `);
        scre.style.backgroundColor = "#C93430";
      } else if (points > 10) {
        winer.play();
        scre.style.backgroundColor = "#85a94e";
        scre.append(`SCORE: ${points} Gameed Yasta`);
      } else {
        scre.style.backgroundColor = "#292826";
        scre.append(`SCORE: ${points}? Tamam Yegy menk`);
        runout.play();
      }
      let vie = document.querySelector(".chessboard");
      vie.append(scre);

      const popUp = setTimeout(removeImg, 3000);

      function removeImg() {
        scre.remove();
      }

      points = 0;

      score.innerHTML = `${points}`;

      // remove answers
      var items = wrongAnsDiv.getElementsByTagName("li");
      for (var i = 0; i <= items.length; i++) {
        items[i].remove();
        items[i].remove();
        items[i].style.display = "none";


        wrongAns = [];
        
      }

    

    }
  }, 1000);
}
