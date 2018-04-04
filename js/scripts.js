//Back-
function Board(ctx, width, height) {
  this.ctx           = ctx;
  this.width         = width;
  this.height        = height;
  this.cellWidth     = this.width/7;
  this.cellHeight    = this.height/6;
  this.Turn = 0;
  this.grid = [];
    for (var x = 0; x < 7; x ++) {
      this.grid[x] = [];
      for (var y = 0; y < 6; y++) {
        this.grid[x][y] = "0";
      };
    };
};

Board.prototype.draw = function() {
  this.ctx.lineWidth = 3;

  for (var x = this.cellWidth; x < this.width; x = x+this.cellWidth) {   //Draws Grid
    this.ctx.beginPath();
    this.ctx.moveTo(x,0);
    this.ctx.lineTo(x, this.height);
    this.ctx.stroke();
  };

  for (var y = this.cellHeight; y < this.height; y = y+this.cellHeight) {   //Draws Grid
    this.ctx.beginPath();
    this.ctx.moveTo(0,y);
    this.ctx.lineTo(this.width, y);
    this.ctx.stroke();
  };
};

Board.prototype.dropChecker = function (x,y)  {
  if (this.Turn %2 == 0) { this.dropCheckerRed(x, y);
  } else {
      this.dropCheckerYel(x,y);
  };
  this.Turn++;
};

Board.prototype.dropCheckerRed = function(x, y) {
  console.log(x,y);
  if (this.grid[x][y] == '0' ) {
    this.grid[x][y] = 'R'
  };
  console.log(this.grid)
};

Board.prototype.dropCheckerYel = function(x, y) {
  console.log(x,y);
  if (this.grid[x][y] == '0' ) {
    this.grid[x][y] = 'Y'    
  };
  console.log(this.grid)
};
// Board.prototype.placeCheckers = function()  {
//   this.A[0];


  // if (this.A.indexOf(0) == "R" ) {
  //   console.log("First cloumn is Red");



// Board.prototype.animateChecker = function(x, y) {
//   var amount = 0;
//   var c = this.ctx;
//   var centerX = x*this.cellWidth + this.cellWidth/2;
//   var centerY = y*this.cellHeight + this.cellHeight/2;
//   var radius = (this.cellWidth * (1.5/5));
//   var circleInt = setInterval(function() {
//     amount += 0.05;
//     if (amount > 1) {
//       amount = 1;
//       clearInterval(circleInt);
//     };
//     c.clearRect(0, 0, this.width, this.height);
//     c.beginPath();
//     c.arc(centerX, centerY, radius, 0, (2*Math.PI)*amount);
//     c.stroke();
//   }, 20);
// };



  // if (this.A.length > 0) {
  //         this.placeCheckers()
  //         console.log("Placement");
  //       };

//Front-End
$(document).ready(function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  canvas.addEventListener("mousedown", getPos);

  var gameBoard = new Board(ctx, canvas.width, canvas.height);


  // checkBoard()

  function getPos(event) {
    var rect = canvas.getBoundingClientRect();
    var x = Math.floor((event.clientX - rect.left)/gameBoard.cellWidth);
    var y = Math.floor((event.clientY - rect.top)/gameBoard.cellHeight);
    gameBoard.dropChecker(x,y);
    console.log("Turn # = " + gameBoard.Turn +  " | grid @ "  + x + " " + y);
    gameBoard.draw();

  };
    gameBoard.draw();


});
