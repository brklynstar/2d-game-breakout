class Game {
    constructor() {
        this.ball = new Ball(0, 0, 2, -2, ballRadius, objectColor);
        this.paddle = new Paddle(paddleXStart, paddleYStart, paddleWidth, paddleHeight, objectColor);
        this.bricks = new Bricks(brickColumnCount, brickRowCount);
        this.scoreLabel = new GameLabel('Score: ', 8, 20);
        this.livesLabel = new GameLabel('Lives: ', canvas.width - 65, 20);

        this.rightPressed = false;
        this.leftPressed = false;
        
        this.setup();
        this.registerEventListeners();
        this.
        this.draw();
    }

    setup() {
        this.livesLabel.value = 3;
        this.resetBallAndPaddle();
    }
        
    registerEventListeners() {
        document.addEventListener('keydown',(e) => this.handleKeyDown(e));
        document.addEventListener('keyup', (e) => this.handleKeyUp(e));
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    handleKeyDown(e) {
        if (e.key === 'Right' || e.key === 'ArrowRight') {
            this.rightPressed = true;
        } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
            this.leftPressed = true;
            }
        }

    
    handleKeyUp(e) {
        if (e.key === 'Right' || e.key === 'ArrowRight') {
            this.rightPressed = false;
        } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
                this.leftPressed = false;
            }
        }
    handleMouseMove(e) {
        const relativeX = e.clientX - canvas.offsetLeft;
        if (relativeX > 0 && relativeX < canvas.width) {
            this.paddle.moveTo(relativeX - this.paddle.width / 2, paddleYStart);
        }
    }
    

    collisionDetection(){
        for (let c = 0; c < this.bricks.cols; c += 1) {
            for (let r = 0; r < this.bricks.rows; r += 1) {
            const brick = this.bricks.bricks[c] [r];
            if (brick.status === 1) {
                (this.ball.x > brick.x &&
                    this.ball.x < brick.x + brickWidth &&
                    this.ball.y > brick.y && this.ball.y < brick.y + brickHeight) {
                        this.ball.dy = -this.ball.dy;
                    }
                    
            } = (c * (const this.brickWidth + const brickPadding)) + const brickOffsetLeft;
                     const y = (r * (const brickHeight + const brickPadding)) + const brickOffsetTop;
                     const bricks[c][r] = new Brick(x,y, const brickWidth, const brickHeight, 'white', 1);
                 }
             }
    }

   

    
    
animate() {
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
    requestAnimationFrame(() => this.animate());
  }

  resetBallAndPaddle() {
   





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

        requestAnimationFrame(this.draw.bind(this));
        )};
        

    
    // function displayWinningMessage() {
    // alert('YOU WIN, CONGRATULATIONS!');
    // }

    //
    // 
    //         if (
    //         x > b.x
    //             && x < b.x + brickWidth
    //             && y > b.y
    //             && y < b.y + brickHeight
    //         ) {
    //         dy = -dy;
    //         b.status = 0;
    //         score += 1;
    //         if (score === brickRowCount * brickColumnCount) {
    //             displayWinningMessage();
    //             document.location.reload();
    //         }
    //         }
    //     }
    //     }
    // }
    // }






    // function drawScore() {
    // ctx.font = '16px Arial-bold';
    // ctx.fillStyle = 'black';
    // ctx.fillText(`Score: ${score}`, 8, 20);
    // }

    // function drawLives() {
    // ctx.font = '16px Arial';
    // ctx.fillStyle = 'red';
    // ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
    // }

    /
    // if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    //     dx = -dx;
    // }
    // if (y + dy < ballRadius) {
    //     dy = -dy;
    // } else if (y + dy > canvas.height - ballRadius) {
    //     if (x > paddleX && x < paddleX + paddleWidth) {
    //     if (y -= paddleHeight) { dy = -dy; }
    //     } else {
    //     lives -= 1;
    //     if (!lives) {
    //         alert('GAME OVER');
    //         document.location.reload();
    //     } else {
    //         x = canvas.width / 2;
    //         y = canvas.height - 30;
    //         dx = 2;
    //         dy = -2;
    //         paddleX = (canvas.width - paddleWidth) / 2;
    //     }
    //     }
    // }

    // if (rightPressed && paddleX < canvas.width - paddleWidth) {
    //     paddleX += 7;
    // } else if (leftPressed && paddleX > 0) {
    //     paddleX -= 7;
    // }

    // x += dx;
    // y += dy;
    // 
    // requestAnimationFrame(draw);


    // }

       