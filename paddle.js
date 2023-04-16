class Paddle {
  constructor(x, y, width, height, color = 'black') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

render(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }
    }

const paddle = new Paddle(paddleXStart, paddleYStart, paddleWidth, paddleHeight);

