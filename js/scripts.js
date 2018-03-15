//Back-End

function Board(ctx, width, height)  {
  this.ctx = ctx;
  this.width = width;
  this.height = height;
};

Board.prototype.draw = function() {

this.ctx.moveTo(0,0);
this.ctx.lineTo(45,600);
this.ctx.stroke();



}



//Front-End
$(document).ready(function() {
  // console.log('Ready');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

var gameboard = new Board(ctx, canvas.width, canvas.height);

gameboard.draw();

});
