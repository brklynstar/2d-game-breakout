var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Variables
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;


// Functions
function drawball() {
    ctx.beginPath();
    ctx.arc(x, ballRadius, 10, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawball();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
  }
   

  setInterval(draw, 10);
  
