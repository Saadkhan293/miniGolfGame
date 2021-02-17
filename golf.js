function golf(){
    var ground = document.getElementById("green");
var draw = ground.getContext("2d");
ground.width = 700;
ground.height = 300;
ground.style.position = "relative";

class Ball {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  drawBall() {
    draw.beginPath();
    draw.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    draw.fillStyle = this.color;
    draw.fill();
  }
}
class Hole {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  drawHole() {
    draw.beginPath();
    draw.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    draw.fillStyle = this.color;
    draw.fill();
  }
}
const ball = new Ball(20, 150, 10, "white");
const hole = new Hole(600, 150, 20, "black");
ball.drawBall();
hole.drawHole();
var click = 0;
var score = 0;
//player 1 can stroke the ball by just clicking on the golf ground.
function stroke() {
  click = click + 1;
  var random = Math.floor(Math.random() * (650 - 20) + 20);
  draw.clearRect(0, 0, ground.width, ground.height);
  const ball = new Ball(random, 150, 10, "white");
  score = checkPlayer_1_Ball(ball.x, click);
  document.getElementById("result").innerHTML = "score:" + score;

  console.log(click);
  ball.drawBall();
  hole.drawHole();
}
ground.addEventListener("click", stroke);

//stroke function for the first player

function checkPlayer_1_Ball(x, click) {
  if (x > 570 && click == 1) {
    document.getElementById("winning").innerHTML = "Hole-in-one";
    ground.removeEventListener("click", stroke);
    document.getElementById("button").addEventListener("click", drawCanvas);
    return click;
  } else if (x > 570 && click == 2) {
    document.getElementById("winning").innerHTML = "double eagle";
    ground.removeEventListener("click", stroke);
    document.getElementById("button").addEventListener("click", drawCanvas);
    return click;
  } else if (x > 570 && click == 3) {
    document.getElementById("winning").innerHTML = " eagle";
    ground.removeEventListener("click", stroke);
    document.getElementById("button").addEventListener("click", drawCanvas);
    return click;
  } else if (x > 570 && click == 4) {
    document.getElementById("winning").innerHTML = "birdie";
    ground.removeEventListener("click", stroke);
    document.getElementById("button").addEventListener("click", drawCanvas);
    return click;
  } else if (x > 570 && click == 5) {
    document.getElementById("winning").innerHTML = "Par";
    ground.removeEventListener("click", stroke);
    document.getElementById("button").addEventListener("click", drawCanvas);
    return click;
  } else if (click >= 5) {
    document.getElementById("winning").innerHTML = "Go-Home";
    ground.removeEventListener("click", stroke);
    document.getElementById("button").addEventListener("click", drawCanvas);
    return click;
  }
}
var click_2 = 0;
var score_2 = 0;
//player 2 can stroke the ball by just clicking on the golf ground.
function stroke2() {
  click_2 = click_2 + 1;
  var random = Math.floor(Math.random() * (610 - 20) + 20);
  draw.clearRect(0, 0, ground.width, ground.height);
  const ball_2 = new Ball(random, 150, 10, "white");
  score_2 = checkPlayer_2_Ball(ball.x, click_2);
  document.getElementById("player_1").innerHTML = result(score, score_2);
  document.getElementById("result_2").innerHTML = "score: " + score_2;
  score_2=0;
  score=0;
  ball_2.drawBall();
  hole.drawHole();
}

//reseting the golf ground for the second player
function drawCanvas() {
  var ground = document.getElementById("green");
  var draw = ground.getContext("2d");
  draw.clearRect(0, 0, ground.width, ground.height);
  const ball = new Ball(20, 150, 10, "white", 0);
  const hole = new Hole(600, 150, 20, "black");
  ball.drawBall();
  hole.drawHole();
  ground.addEventListener("click", stroke2);
}
//stroke function for the 2nd player
function checkPlayer_2_Ball(x, click) {
  if (x > 570 && click == 1) {
    document.getElementById("winning_2").innerHTML = "Hole-in-one";
    ground.removeEventListener("click", stroke2);
    return click;
  } else if (x > 570 && click == 2) {
    document.getElementById("winning_2").innerHTML = "double eagle";
    ground.removeEventListener("click", stroke2);
    return click;
  } else if (x > 570 && click == 3) {
    document.getElementById("winning_2").innerHTML = " eagle";
    ground.removeEventListener("click", stroke2);
    return click;
  } else if (x > 570 && click == 4) {
    document.getElementById("winning_2").innerHTML = "birdie";
    ground.removeEventListener("click", stroke2);
    return click;
  } else if (x > 570 && click == 5) {
    document.getElementById("winning_2").innerHTML = "Par";
    ground.removeEventListener("click", stroke2);
  } else if (click >= 5) {
    document.getElementById("winning_2").innerHTML = "Go-Home";
    ground.removeEventListener("click", stroke2);
    return click;
  }
}
var win = 0;
var win_2 = 0;
var loss = 0;
var loss_2 = 0;
var tie = 0;
var tie_2 = 0;
function result(score, score_2) {
  if (score_2 < score) {
    win_2 = win_2 + 1;
    loss = loss + 1;
    document.getElementById("wins-2").innerHTML = "wins :" + win_2;
    document.getElementById("loss").innerHTML = "loss :" + loss;

    return "player 2 wins";
  } else if (score < score_2) {
    win = win + 1;
    loss_2 = loss_2 + 1;
    document.getElementById("wins").innerHTML = "wins :" + win;
    document.getElementById("loss-2").innerHTML = "loss :" + loss_2;
    return "player 1 wins";
  } else if (score === score_2) {
    tie = tie + 1;
    tie_2 = tie_2 + 1;
    document.getElementById("draw").innerHTML = "Draw :" + tie;
    document.getElementById("draw_2").innerHTML = "Draw :" + tie_2;
    return "draw";
  }
}
function reset() {
  
    golf();
  
}
document.getElementById("reset").addEventListener("click", reset);
}
function result(score, score_2) {
  if (score_2 < score) {
    win_2 = win_2 + 1;
    loss = loss + 1;
    document.getElementById("wins-2").innerHTML = "wins :" + win_2;
    document.getElementById("loss").innerHTML = "loss :" + loss;

    return "player 2 wins";
  } else if (score < score_2) {
    win = win + 1;
    loss_2 = loss_2 + 1;
    document.getElementById("wins").innerHTML = "wins :" + win;
    document.getElementById("loss-2").innerHTML = "loss :" + loss_2;
    return "player 1 wins";
  } else if (score === score_2) {
    tie = tie + 1;
    tie_2 = tie_2 + 1;
    document.getElementById("draw").innerHTML = "Draw :" + tie;
    document.getElementById("draw_2").innerHTML = "Draw :" + tie_2;
    return "draw";
  }
}
console.log(golf());