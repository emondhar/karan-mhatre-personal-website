$(function() {
  startGame();
});

var myGamePiece;
// var myGamePiece2;

function startGame() {
  myGameArea.start();
  // myGamePiece = new component("rect", 30, 30, "red", 10, 120);
  myGamePiece2 = new component("triangle", 0, 0, "red", 120, 20);
}

function updateGameArea() {
  myGameArea.clear();
  // myGamePiece2.x += 1;
  myGamePiece2.update();
}

var myGameArea = {
  canvas : $("#game-container")[0],

  start : function() {
    this.context = this.canvas.getContext('2d');
    this.interval = setInterval(updateGameArea, 20);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

}

function component(shape, width, height, color, x, y) {
  this.shape = shape;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;

  this.update = function() {

    // console.log(x + "," + y);

    ctx = myGameArea.context;
    ctx.fillStyle = color;

    switch(shape) {
      case "rect":
        ctx.fillRect(this.x, this.y, this.width, this.height);
        break;
      case "triangle":
        var path=new Path2D();
        path.moveTo(this.x, this.y);
        path.lineTo(this.x+50, this.y);
        path.lineTo(this.x, this.y+20);
        ctx.fill(path);
    }

  }
}