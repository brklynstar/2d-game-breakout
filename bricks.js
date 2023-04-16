class Bricks {
  constructor(cols, rows) {
    this.cols = cols;
    this.rows = rows;
    this.bricks = [];
    this.init();
  }

  init() {
    for (let c = 0; c < this.cols; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
        this.bricks[c][r] = new Brick(brickX, brickY, brickWidth, brickHeight, objectColor);
      }
    }
  }

render(ctx) {
        for (let c = 0; c < this.cols; c += 1) {
            for (let r = 0; r < this.rows; r += 1) {
                const brick = this.bricks[c][r];
                if (brick.status === 1) {
                brick.render(ctx);
              }
        }
    }
}
const bricks = new Bricks(brickColumnCount, brickRowCount)


draw() {
    console.log('***** game.draw() *****', this);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.bricks.render(ctx);
    this.ball.render(ctx);
    this.paddle.render();
    this.score.render();
    this.lives.render();
    this.collisionDetection();
    this.ball.move();
    this.movePaddle();
    this.collisionsWithCanvasAndPaddle();
    
 }

    requestAnimationFrame(() => {
        this.draw();
        });
    }
}
    

