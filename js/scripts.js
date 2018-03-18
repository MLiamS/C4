//Back-
A = [];
B = [];
C = [];
D = [];
E = [];
F = [];
G = [];
var Turn = 0;

function Board(ctx, width, height) {
  this.ctx           = ctx;
  this.width         = width;
  this.height        = height;
  this.cellWidth     = this.width/7;
  this.cellHeight    = this.height/6;
  this.grid = [];
    for (var x = 0; x < 7; x ++) {
      this.grid[x] = [];
      for (var y = 0; y < this.height; y++) {
        this.grid[x][y] = "";
      };
    };

};

Board.prototype.draw = function() {
  this.ctx.lineWidth = 3;

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

function dropCheckerRed(x) {
  if (x == 0 && A.length < 6) { A.push("R") };
  if (x == 1 && B.length < 6) { B.push("R") };
  if (x == 2 && C.length < 6) { C.push("R") };
  if (x == 3 && D.length < 6) { D.push("R") };
  if (x == 4 && E.length < 6) { E.push("R") };
  if (x == 5 && F.length < 6) { F.push("R") };
  if (x == 6 && G.length < 6) { G.push("R") };
  Turn ++;

  console.log("A-[" + A  + "] B-[" + B  + "] " + "C-[" + C +"] " + "D-[" + D + "] " + "E-[" + E  + "] " + "F-[" + F + "]  G-[" + G + "]");
};

function dropCheckerYel(x) {
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
    // var y = Math.floor((event.clientY - rect.top)/gameBoard.cellHeight);
    console.log("column "  + x);

    if (Turn%2 == 0) {
      dropCheckerRed(x);
    }
      else {
        dropCheckerYel(x)
    };

  };
    gameBoard.draw();


});
