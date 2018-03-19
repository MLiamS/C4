//Back-
function Board(ctx, width, height) {
  this.ctx           = ctx;
  this.width         = width;
  this.height        = height;
  this.cellWidth     = this.width/7;
  this.cellHeight    = this.height/6;
  this.A = [];
  this.B = [];
  this.C = [];
  this.D = [];
  this.E = [];
  this.F = [];
  this.G = [];
  this.Turn = 0;

  this.grid = [];
    for (var x = 0; x < 7; x ++) {
      this.grid[x] = [];
      for (var y = 0; y < this.height; y++) {
        this.grid[x][y] = "";
      };
    };
};

Board.prototype.dropChecker = function (x,y)  {

}

Board.prototype.animateChecker = function(x, y) {
  var amount = 0;
  var c = this.ctx;
  var centerX = x*this.cellWidth + this.cellWidth/2;
  var centerY = y*this.cellHeight + this.cellHeight/2;
  var radius = (this.cellWidth * (1.5/5));
  var circleInt = setInterval(function() {
    amount += 0.05;
    if (amount > 1) {
      amount = 1;
      clearInterval(circleInt);
    };
    c.clearRect(0, 0, this.width, this.height);
    c.beginPath();
    c.arc(centerX, centerY, radius, 0, (2*Math.PI)*amount);
    c.stroke();
  }, 20);
};

// if (gameBoard.Turn%2 == 0) {
//   gamneboard.dropCheckerRed(x);
// }
//   else {
//     dropCheckerYel(x)
// };


Board.prototype.draw = function() {
  this.ctx.lineWidth = 3;

  if (this.A.length > 0) {
          this.animateChecker(x, y);
        }


  for (var x = this.cellWidth; x < this.width; x = x+this.cellWidth) {
    this.ctx.beginPath();
    this.ctx.moveTo(x,0);
    this.ctx.lineTo(x, this.height);
    this.ctx.stroke();
  };

  for (var y = this.cellHeight; y < this.height; y = y+this.cellHeight) {
    this.ctx.beginPath();
    this.ctx.moveTo(0,y);
    this.ctx.lineTo(this.width, y);
    this.ctx.stroke();
  };
};

Board.prototype.dropCheckerRed = function(x, y) {
  if (x == 0 && A.length < 6) { A.push("R") };
  if (x == 1 && B.length < 6) { B.push("R") };
  if (x == 2 && C.length < 6) { C.push("R") };
  if (x == 3 && D.length < 6) { D.push("R") };
  if (x == 4 && E.length < 6) { E.push("R") };
  if (x == 5 && F.length < 6) { F.push("R") };
  if (x == 6 && G.length < 6) { G.push("R") };
  Turn ++;


  console.log("A-[" + this.A  + "] B-[" + B  + "] " + "C-[" + C +"] " + "D-[" + D + "] " + "E-[" + E  + "] " + "F-[" + F + "]  G-[" + G + "]");
};

Board.prototype.dropCheckerYel = function(x, y) {
  if (x == 0 && A.length < 6) { A.push("Y") };
  if (x == 1 && B.length < 6) { B.push("Y") };
  if (x == 2 && C.length < 6) { C.push("Y") };
  if (x == 3 && D.length < 6) { D.push("Y") };
  if (x == 4 && E.length < 6) { E.push("Y") };
  if (x == 5 && F.length < 6) { F.push("Y") };
  if (x == 6 && G.length < 6) { G.push("Y") };
  Turn ++;

  console.log("A-[" + A  + "] B-[" + B  + "] " + "C-[" + C +"] " + "D-[" + D + "] " + "E-[" + E  + "] " + "F-[" + F + "]  G-[" + G + "]");
};

// function updateBoard() {
//   if (A.length > 0) {
//
//
//   }
// }
//
// };


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
    console.log("column "  + x);
  };
    gameBoard.draw();


});
