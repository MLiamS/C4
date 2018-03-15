//Back-End

function Board(ctx, width, height) {
  this.ctx           = ctx;
  this.width         = width;
  this.height        = height;
  this.cellwidth     = this.width/7;
  this.cellheight    = this.height/6;

  
};

Board.prototype.draw = function() {
  this.ctx.lineWidth = 3;

  for (var x         = this.cellwidth; x < this.width; x = x+this.cellwidth) {
    this.ctx.beginPath();
    this.ctx.moveTo(x,0);
    this.ctx.lineTo(x, this.height);
    this.ctx.stroke();
  };

  for (var y         = this.cellheight; y < this.height; y = y+this.cellheight) {
    this.ctx.beginPath();
    this.ctx.moveTo(0,y);
    this.ctx.lineTo(this.width, y);
    this.ctx.stroke();
  };


};



//Front-End
$(document).ready(function() {
  var canvas         = document.getElementById('canvas');
  var ctx            = canvas.getContext('2d');

  var gameboard        = new Board(ctx, canvas.width, canvas.height);

  gameboard.draw();

});
