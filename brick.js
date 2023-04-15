class Brick {
  constructor(x, y, width, height, color, status) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.status = status;
  }
}

//   for (let c = 0; c < brickColumnCount; c += 1) {
//     for (let r = 0; r < brickRowCount; r += 1) {
//       if (bricks[c][r].status === 1) {
//         const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
//         const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
//         bricks[c][r].x = brickX;
//         bricks[c][r].y = brickY;
//         ctx.beginPath();
//         ctx.rect(brickX, brickY, brickWidth, brickHeight);
//         ctx.fillStyle = 'white';
//         ctx.strokeStyle = 'black';
//         const fillRect = false;

//         if (fillRect) {
//           ctx.fill();
//         }
//         ctx.stroke();
//         ctx.fill();

//         ctx.closePath();
//       }
//     }
//   }
// }
