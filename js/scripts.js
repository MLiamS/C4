//Back-
A = [];
B = [];
C = [];
D = [];
E = [];
F = [];
G = [];

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

function dropChecker(x,y) {
  if (x == 0) { A.push(true) };
  if (x == 1) { B.push(true) };
  if (x == 2) { C.push(true) };
  if (x == 3) { D.push(true) };
  if (x == 4) { E.push(true) };
  if (x == 5) { F.push(true) };
  if (x == 6) { G.push(true) };

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
    var y = Math.floor((event.clientY - rect.top)/gameBoard.cellHeight);
    console.log("cell x,y..." + "   " + x + " " + y);

    dropChecker(x,y);

  };
    gameBoard.draw();


});
